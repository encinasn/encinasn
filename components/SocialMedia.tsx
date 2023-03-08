import { Text } from "@/components/ui/text";
import { ArrowUpRight } from "./icons/ArrowUpRight";

import { LINKS } from "./social-links";

export default function SocialMedia() {
  return (
    <Text as="div" size="sm" className="flex items-center justify-center gap-6 lg:gap-8">
      {LINKS.map(({ title, url }) => (
        <a
          key={title}
          target="_blank"
          href={url}
          className="flex items-center gap-1 hover:underline underline-offset-4"
        >
          <span>{title}</span>
          <ArrowUpRight />
        </a>
      ))}
    </Text>
  );
}
