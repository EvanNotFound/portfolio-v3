"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useCursor } from "@/app/components/cursor-context";

export default function CursorLink({
  children,
  className,
  key,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  key?: string;
  href: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { setIsHovered, setHoveredElement } = useCursor();

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
      <Link href={href} key={key} className={className}>
        {children}
      </Link>
    </div>
  );
}
