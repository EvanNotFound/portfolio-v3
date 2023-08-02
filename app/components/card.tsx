"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useSpring,
  useInView,
  useAnimation,
  Variants,
} from "framer-motion";

export const Card = ({
  delay,
  children,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  const mouseX = useSpring(100, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  let cardVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="initial"
      animate={controls}
      exit="exit"
      transition={{
        opacity: {
          type: "spring",
          stiffness: 260,
          damping: 17,

          delay: delay ?? 0,
          duration: 0.7,
        },
        y: {
          type: "spring",
          stiffness: 260,
          damping: 17,

          delay: delay ?? 0,
          duration: 0.7,
        },
        border: {
          type: "ease",
          duration: 0.7,
        },
      }}
      onMouseMove={onMouseMove}
      className="transition-[box-shadow,border]  duration-500 shadow-none hover:shadow-xl hover:shadow-zinc-500/10 py-4 sm:py-8 relative overflow-hidden  border rounded-2xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-300/40 border-zinc-600 "
    >
      <div className="pointer-events-none">
        <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
        <motion.div
          className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
          style={style}
        />
        <motion.div
          className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
          style={style}
        />
      </div>

      {children}
    </motion.div>
  );
};
