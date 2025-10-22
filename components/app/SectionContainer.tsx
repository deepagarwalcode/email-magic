import { cn } from "@/lib/utils";
import React from "react";

const SectionContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("container mx-auto px-4 max-w-7xl py-20", className)}>{children}</div>
  );
};

export default SectionContainer;
