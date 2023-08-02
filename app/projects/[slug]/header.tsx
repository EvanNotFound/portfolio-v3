"use client";
import { motion } from "framer-motion";
import { ArrowLeft, Eye, Github, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  project: {
    url?: string;
    title: string;
    description: string;
    repository?: string;
  };

  views: number;
};

const headerVariants = {
  hidden: {
    height: "100vh",
  },
  visible: {
    height: "auto",
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200,
      delay: 1,
    },
  },
};

const infoVariants = {
  hidden: {
    opacity: 0,
    y: "20vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        type: "spring",
        damping: 20,
        stiffness: 200,
        delay: 0.95,
        duration: 0.15,
      },
    },
  },
  exit: {
    opacity: 0,
    y: "20vh",
  },
};

export const Header: React.FC<Props> = ({ project, views }) => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      ref={ref}
      variants={headerVariants}
      initial={"hidden"}
      animate={"visible"}
      className="relative isolate bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-white/10  border-zinc-200 lg:border-transparent"
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`duration-200 hover:font-medium flex items-center gap-1 ${
                isIntersecting
                  ? " text-zinc-400 hover:text-zinc-100"
                  : "text-zinc-600 hover:text-zinc-900"
              } `}
            >
              <Eye className="w-5 h-5" />{" "}
              {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                views,
              )}
            </span>
            <Link
              target="_blank"
              href="https://www.instagram.com/evannotfound/"
            >
              <Instagram
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/EvanNotFound">
              <Github
                className={`w-6 h-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? " text-zinc-400 hover:text-zinc-100"
                    : "text-zinc-600 hover:text-zinc-900"
                } `}
              />
            </Link>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? " text-zinc-400 hover:text-zinc-100"
                : "text-zinc-600 hover:text-zinc-900"
            } `}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
      <div className="container mx-auto relative isolate overflow-hidden py-24 sm:pt-32 sm:pb-44">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          exit={"exit"}
          variants={infoVariants}
          className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center"
        >
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <div
                  key={link.label}
                  className={
                    "group flex flex-row items-center justify-center.5 cursor-pointer hover:text-zinc-300 transition-all"
                  }
                >
                  <Link target="_blank" href={link.href}>
                    {link.label}
                  </Link>
                  <ArrowRight
                    className={
                      "w-5 h-5 group-hover:translate-x-1  transition-all"
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};
