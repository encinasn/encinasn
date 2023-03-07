import { cn } from "@/lib/utils";
import React from "react";

type TextProps = React.PropsWithChildren<{
  as?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}>;

export function Text({
  as = "p",
  size = "md",
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    { className: cn(SIZES[size], className), ...props },
    children
  );
}

const SIZES = {
  xl: "text-4xl font-semibold md:text-6xl lg:text-7xl",
  lg: "text-2xl font-semibold md:text-3xl lg:text-4xl",
  md: "text-lg font-semibold md:text-2xl leading-relaxed lg:text-3xl",
  sm: "text-sm font-medium md:text-md leading-relaxed lg:text-lg",
};
