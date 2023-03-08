"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type CardProps = PropsWithChildren<{
  as?: any;
  delay?: number;
  isHighlighted?: boolean;
  isCentered?: boolean;
  className?: ClassValue;
}>;

export function Card({
  as = motion.div,
  delay = 0,
  isHighlighted,
  isCentered,
  className,
  children,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cn(
        "overflow-hidden rounded-lg bg-secondary p-4 text-white shadow md:rounded-xl md:p-8 lg:p-10",
        isHighlighted && "bg-primary text-secondary",
        isCentered && "flex items-center justify-center",
        className
      ),
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay } },
      ...props,
    },
    children
  );
}
