/* eslint-disable react/no-unescaped-entities */
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

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
            "flex items-center justify-center z-10"
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
            <div className="p-7 md:p-8 lg:p-10">
              <Text size="sm">
                Hi there! I'm Nahuel, a designer turned Frontend developer from
                Argentina.👋
                <br />
                <br /> I'm a creative thinker and problem solver who loves to
                create UI designs that are both visually pleasing and
                functionally sound.
                <br />
                <br />
                I'm interested in ui, design systems, dev rel and user/dev
                experience.
              </Text>
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
