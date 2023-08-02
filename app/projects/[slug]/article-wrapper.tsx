"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ArticleWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint to match your mobile device's width
    };

    handleResize(); // Check initial size on mount

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 40 }}
      animate={{ opacity: 1, y: isMobile ? -40 : -120 }} // Set y to -20 on mobile, otherwise -120
      exit={{ opacity: 0, y: -80 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.7,
        duration: 5,
      }}
    >
      {children}
    </motion.div>
  );
}
