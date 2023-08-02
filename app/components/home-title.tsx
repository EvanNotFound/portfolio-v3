"use client";
import React from "react";
import { useCursor } from "@/app/components/cursor-context";

export default function HomeTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { setIsHovered, setElementSize } = useCursor();
  return (
    <h1
      onMouseEnter={() => {
        setIsHovered(true);
        setElementSize({ width: 200, height: 200 });
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setElementSize({ width: 20, height: 20 });
      }}
      className={className}
    >
      {children}
    </h1>
  );
}
