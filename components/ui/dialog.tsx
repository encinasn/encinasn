"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
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
    forceMount
    asChild
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm md:items-start",
      className
    )}
    {...props}
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4 } }}
      exit={{ opacity: 0 }}
    >
      <DialogPrimitive.Title
        className={cn(
          "fixed z-50 -mt-96 h-min w-screen text-center text-[7rem] font-semibold leading-none sm:text-[10rem] md:mt-20 md:text-[14rem] lg:mt-0 lg:text-[20rem]",
          "bg-gradient-to-b from-white to-white/0 bg-clip-text text-transparent",
          title === "Contact" && "mt-[-28rem] text-[6rem] leading-none"
        )}
      >
        {title}
      </DialogPrimitive.Title>
    </motion.div>
  </DialogPrimitive.Overlay>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

interface DialogProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  layoutId?: string;
}
interface DialogWithRefProps
  extends React.ElementRef<typeof DialogPrimitive.Content> {
  layoutId?: string;
}

const DialogContent = React.forwardRef<DialogWithRefProps, DialogProps>(
  ({ className, title, layoutId, children, ...props }, ref) => (
    <DialogPortal>
      <DialogOverlay title={title} />
      <DialogPrimitive.Content forceMount asChild ref={ref} {...props}>
        <motion.div
          layoutId={layoutId}
          className={cn(
            "z-50 w-full overflow-hidden rounded-lg bg-secondary lg:mt-20",
            className
          )}
        >
          <motion.div
            className="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            {children}

            <DialogPrimitive.Close className="flex items-center justify-center p-6 font-medium opacity-70 transition-opacity focus-within:bg-white/5 focus-within:outline-none hover:opacity-100 disabled:pointer-events-none">
              Close
            </DialogPrimitive.Close>
          </motion.div>
        </motion.div>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

export { Dialog, DialogTrigger, DialogContent };
