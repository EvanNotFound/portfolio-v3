"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define the shape of the context
interface CursorContextType {
  isHovered: boolean;
  setIsHovered: React.Dispatch<React.SetStateAction<boolean>>;
  hoveredElement: HTMLElement | null;
  setHoveredElement: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  elementSize: { width: number; height: number };
  setElementSize: React.Dispatch<React.SetStateAction<any>>;
}

// Create a Context
export const CursorContext = createContext<CursorContextType | undefined>(
  undefined,
);

// Create a Provider component
export const CursorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(
    null,
  );
  const [elementSize, setElementSize] = useState({ width: 20, height: 20 });

  return (
    <CursorContext.Provider
      value={{
        isHovered,
        setIsHovered,
        hoveredElement,
        setHoveredElement,
        elementSize,
        setElementSize,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

// Create a custom hook to use the CursorContext
export const useCursor = (): CursorContextType => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider");
  }
  return context;
};
