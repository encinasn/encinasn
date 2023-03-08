/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { LINKS } from "./social-links";
import { ArrowUpRight } from "./icons/ArrowUpRight";

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
          delay={1}
          layoutId="contact"
          className={cn(
            "overflow-hidden rounded-lg bg-secondary p-4 text-white shadow md:rounded-xl md:p-8 lg:p-10",
            "cursor-pointer py-4 lg:py-8",
            "bg-primary text-secondary",
            "flex items-center justify-center"
          )}
        >
          <motion.div animate={{ opacity: isOpen ? 0 : 1 }}>
            <Text>Contact me</Text>
          </motion.div>
        </Card>
      </DialogTrigger>

      <AnimatePresence>
        {isOpen && (
          <DialogContent
            title="Contact"
            layoutId="contact"
            className="bg-primary text-secondary sm:max-w-[425px]"
          >
            <Text
              as="div"
              size="sm"
              className="flex flex-col gap-4 p-7 md:p-8 lg:p-10"
            >
              {LINKS.map(({ title, url }) => (
                <a
                  key={title}
                  target="_blank"
                  href={url}
                  className="group flex items-center justify-between overflow-hidden rounded-md bg-black/5 p-4 transition-colors hover:bg-secondary hover:text-white"
                >
                  <span>{title}</span>

                  <ArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100 group-hover:animate-in group-hover:slide-in-from-bottom-10" />
                </a>
              ))}
            </Text>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
