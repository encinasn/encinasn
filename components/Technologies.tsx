"use client";

import { Text } from "@/components/ui/text";

export default function Technologies() {
  return (
    <div className="relative m-auto w-auto overflow-hidden">
      <div
        className="animate flex opacity-90"
        style={{ width: `calc(14ch * ${TECHNOLOGIES.length})` }}
      >
        {TECHNOLOGIES.map(({ title }) => (
          <Text
            key={title}
            size="sm"
            className="h-6 w-[14ch] whitespace-nowrap"
          >
            {title}
          </Text>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-14ch * ${TECHNOLOGIES.length / 2}));
          }
        }
        .animate {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

const TECHNOLOGIES = [
  { title: "JavaScript" },
  { title: "TypeScript" },
  { title: "React" },
  { title: "NextJS" },
  { title: "TailwindCSS" },
  { title: "ChakraUI" },
  { title: "Stitches" },
  { title: "Git y GitHub" },
  { title: "Redux" },
  { title: "Storybook" },
  { title: "NodeJS" },
  { title: "Prisma" },
  { title: "Firebase" },
  { title: "Supabase" },
];
