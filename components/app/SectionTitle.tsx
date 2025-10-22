import { cn } from "@/lib/utils";
import React from "react";
import FromDown from "./MotionWrappers/FromDown";

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
  whiteTitle?: boolean;
  tag?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  whiteTitle,
  tag,
}) => {
  return (
    <FromDown
      className={cn(
        "text-center flex flex-col items-center max-w-3xl mx-auto mb-12",
        className
      )}
    >
      <div className="flex items-center justify-center mb-4">
        <div className="w-3 h-2 bg-primary rounded-full mr-2"></div>
        <h2
          className={cn(
            "text-lg font-semibold",
            whiteTitle ? "text-white" : "text-black"
          )}
        >
          {tag}
        </h2>
      </div>
      <h3
        className={cn(
          "text-3xl md:text-4xl font-bold",
          whiteTitle ? "text-white" : "text-black"
        )}
      >
        {title}
      </h3>
      <p className={cn("text-white mt-6 text-lg max-w-3xl", whiteTitle ? "text-white" : "text-black")}>
        {subtitle}
      </p>
    </FromDown>
  );
};
