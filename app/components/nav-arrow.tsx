"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import React, { useRef } from "react";
import { useCursor } from "@/app/components/cursor-context";

export default function NavArrow() {
  const ref = useRef<HTMLDivElement>(null);
  const { setHoveredElement, setIsHovered } = useCursor();

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoveredElement(ref.current);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredElement(null);
      }}
      onClick={() => {
        setIsHovered(false);
        setHoveredElement(null);
      }}
    >
      <Link
        href="/"
        className="duration-200 text-zinc-300 hover:text-zinc-100"
        aria-label={"Back to home"}
      >
        <ArrowLeft className="w-6 h-6 " />
      </Link>
    </div>
  );
}
