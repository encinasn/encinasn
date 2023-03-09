"use client";

import { motion } from "framer-motion";
import { Text } from "./ui/text";

export default function Header() {
  return (
    <header className="flex justify-center px-6 md:px-0">
      <motion.nav
        className="flex w-full max-w-screen-md items-center justify-between py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Text>Welcome</Text>

        <a
          href="mailto:encinasnahuel3@gmail.com"
          className="md:text-md flex h-9 md:h-11 items-center rounded-full bg-white px-4 md:px-5 text-sm font-semibold text-secondary"
        >
          Say hello
        </a>
      </motion.nav>
    </header>
  );
}
