/* eslint-disable react/no-unescaped-entities */
"use client";

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Text } from "@/components/ui/text";

export default function AboutDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent title="About" className="sm:max-w-[425px]">
        <div className="p-6 md:p-8 lg:p-10">
          <Text size="sm">
            Hi there! I'm Nahuel, a designer turned Frontend developer from
            Argentina.👋
            <br />
            <br /> I'm a creative thinker and problem solver who loves to create
            UI designs that are both visually pleasing and functionally sound.
            <br />
            <br />
            I'm interested in ui, design systems, dev rel and user/dev
            experience.
          </Text>
        </div>
      </DialogContent>
    </Dialog>
  );
}
