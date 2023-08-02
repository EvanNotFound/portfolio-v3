"use client";

import React, { useEffect, useState } from "react";

import { motion, Variants, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/app/components/cursor-context";

export default function MouseCursor({}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovered, hoveredElement, elementSize } = useCursor();
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorSize, setCursorSize] = useState({
    width: 20,
    height: 20,
  });

  useEffect(() => {
    if (hoveredElement) {
      console.log(hoveredElement.getBoundingClientRect());
      const { width, height } = hoveredElement.getBoundingClientRect();
      setCursorSize({ width: width, height: height });
    } else {
      setCursorSize({ width: elementSize.width, height: elementSize.height });
    }
  }, [hoveredElement, elementSize]);

  const variants: Variants = {
    normal: {},
    hover: {
      width: cursorSize.width ? cursorSize.width * 1.2 : 20,
      height: cursorSize.height ? cursorSize.height * 1.1 : 20,
    },
  };

  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsTouchDevice(false);
    }

    function handleTouchStart() {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Calculate `halfCursorSize` each time the mouse moves
      let halfCursorWidth = isHovered ? cursorSize.width / 2 : 8;
      let halfCursorHeight = isHovered ? cursorSize.height / 2 : 8;

      cursorX.set(e.clientX - halfCursorWidth);
      cursorY.set(e.clientY - halfCursorHeight);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
    // Add `isHovered` in the dependency array
  }, [isHovered, cursorSize]);

  return (
    <motion.div
      className={`fixed top-0 left-0 w-5 h-5 z-[100] rounded-full bg-gray-300 mix-blend-difference pointer-events-none   ${
        !isTouchDevice ? "block" : "hidden"
      }`}
      animate={"hover"}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      variants={variants}
    ></motion.div>
  );
}
