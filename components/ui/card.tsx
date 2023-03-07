"use client";

import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  as?: any;
  isHighlighted?: boolean;
  isCentered?: boolean;
  className?: ClassValue;
}>;

export function Card({
  as = "div",
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
      ...props,
    },
    children
  );
}
