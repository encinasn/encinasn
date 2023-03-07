import { Text } from "@/components/ui/text";

export default function SocialMedia() {
  return (
    <Text as="div" size="sm" className="flex items-center justify-center gap-6">
      {LINKS.map(({ title, url }) => (
        <a key={title} href={url}>
          {title}
        </a>
      ))}
    </Text>
  );
}

const LINKS = [
  { title: "Email", url: "mailto:encinasnahuel3@gmail.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/encinasn/" },
  { title: "Twitter", url: "https://twitter.com/encinasnahuel3" },
  { title: "GitHub", url: "https://github.com/encinasn" },
];
