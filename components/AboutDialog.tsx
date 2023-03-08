/* eslint-disable react/no-unescaped-entities */
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

export default function AboutDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card
        delay={0.6}
          className={cn(
            "overflow-hidden rounded-lg bg-secondary p-4 text-white shadow md:rounded-xl md:p-8 lg:p-10",
            "cursor-pointer text-primary"
          )}
          layoutId="about"
        >
          <motion.div animate={{ opacity: isOpen ? 0 : 1 }}>
            <Text size="sm">
              A creative thinker and problem solver who loves to create UI
              designs that are both visually pleasing and functionally sound.
            </Text>
          </motion.div>
        </Card>
      </DialogTrigger>

      <AnimatePresence>
        {isOpen && (
          <DialogContent
            title="About"
            layoutId="about"
            className="sm:max-w-[425px]"
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
