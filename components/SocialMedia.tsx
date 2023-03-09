import { Text } from "@/components/ui/text";
import { ArrowUpRight } from "./icons/ArrowUpRight";

import { LINKS } from "./social-links";

export default function SocialMedia() {
  return (
    <Text
      as="div"
      size="sm"
      className="flex items-center justify-center gap-6 lg:gap-8"
    >
      {LINKS.map(({ title, url }) => (
        <a
          key={title}
          target="_blank"
          href={url}
          className="flex items-center gap-1 underline-offset-4 hover:underline"
        >
          <span>{title}</span>
          <ArrowUpRight className="hidden md:block" />
        </a>
      ))}
    </Text>
  );
}
