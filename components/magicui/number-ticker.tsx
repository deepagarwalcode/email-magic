"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    if (isInView) {
      const targetValue = direction === "up" ? value : startValue;
      const currentValue = direction === "up" ? startValue : value;
      
      motionValue.set(currentValue);
      animate(motionValue, targetValue, {
        duration: 4,
        ease: [0.16, 1, 0.3, 1], // ease-out-cubic
      });
    }
  }, [motionValue, isInView, value, direction, startValue]);

  useEffect(
    () =>
      motionValue.on("change", (latest) => {
        if (ref.current) {
          const numValue = typeof latest === 'number' ? latest : parseFloat(latest);
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(numValue.toFixed(decimalPlaces)));
        }
      }),
    [motionValue, decimalPlaces],
  );

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className,
      )}
      {...props}
    >
      {startValue}
    </span>
  );
}
