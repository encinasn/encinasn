"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({
  className,
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal className={cn(className)} {...props}>
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, title, children, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 flex items-center md:items-start justify-center bg-black/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=open]:fade-in data-[state=closed]:fade-out",
      className
    )}
    {...props}
    ref={ref}
  >
    <DialogPrimitive.Title
      className={cn(
        "fixed -mt-96 md:mt-20 lg:mt-0 z-50 h-min w-screen text-center text-[7rem] font-semibold leading-none sm:text-[10rem] md:text-[14rem] lg:text-[20rem]",
        "bg-gradient-to-b from-white to-white/0 bg-clip-text text-transparent"
      )}
    >
      {title}
    </DialogPrimitive.Title>
  </DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, title, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay title={title} />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 lg:mt-20 grid w-full overflow-hidden rounded-lg bg-secondary animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        className
      )}
      {...props}
    >
      {children}

      <DialogPrimitive.Close className="flex items-center justify-center p-6 font-medium opacity-70 transition-opacity focus-within:bg-primary focus-within:text-secondary focus-within:outline-none hover:opacity-100 disabled:pointer-events-none lg:p-8">
        Close
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export { Dialog, DialogTrigger, DialogContent };
