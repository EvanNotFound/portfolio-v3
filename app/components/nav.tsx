"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const NavUnderline = () => (
    <motion.span
      layoutId={"nav-underline"}
      className="abosolute bg-zinc-400 w-full h-[1px] block left-0 group-hover:bg-zinc-200"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.5,
      }}
    />
  );

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto md:max-w-full lg:max-w-7xl">
          <div className="flex justify-between gap-8">
            <div className={"group"}>
              <Link
                href={"/projects"}
                className="duration-200 text-zinc-400 group-hover:text-zinc-100"
                aria-label={"Projects"}
              >
                Projects
              </Link>
              {pathname === "/projects" && <NavUnderline />}
            </div>
            <div className={"group"}>
              <Link
                href={"/contact"}
                className="duration-200 text-zinc-400 group-hover:text-zinc-100"
                aria-label={"Contact"}
              >
                Contact
              </Link>
              {pathname === "/contact" && <NavUnderline />}
            </div>
          </div>

          <Link
            href="/"
            className="duration-200 text-zinc-300 hover:text-zinc-100"
            aria-label={"Back to home"}
          >
            <ArrowLeft className="w-6 h-6 " />
          </Link>
        </div>
      </div>
    </header>
  );
};
