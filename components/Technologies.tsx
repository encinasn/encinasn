"use client";

import Image from "next/image";

export default function Technologies() {
  return (
    <div className="relative m-auto w-auto select-none overflow-hidden">
      <div className="absolute top-0 left-0 z-10 h-full w-full bg-gradient-to-r from-secondary via-transparent to-secondary" />
      <div
        className="animate flex"
        style={{ width: `calc(9.375rem * ${TECHNOLOGIES.length})` }}
      >
        {TECHNOLOGIES.map(({ title, img }) => (
          <Image
            key={title}
            src={img}
            alt={title}
            width={150}
            height={24}
            draggable={false}
            className="h-6 w-[9.375rem] object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-9.375rem * ${TECHNOLOGIES.length / 2}));
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
  { title: "JavaScript", img: "/techs/javascript.webp" },
  { title: "TypeScript", img: "/techs/typescript.webp" },
  { title: "React", img: "/techs/react.webp" },
  { title: "NextJS", img: "/techs/nextjs.webp" },
  { title: "TailwindCSS", img: "/techs/tailwindcss.webp" },
  { title: "ChakraUI", img: "/techs/chakraui.webp" },
  { title: "Stitches", img: "/techs/stitches.webp" },
  { title: "Git y GitHub", img: "/techs/github.webp" },
  { title: "Redux", img: "/techs/redux.webp" },
  { title: "Storybook", img: "/techs/storybook.webp" },
  { title: "NodeJS", img: "/techs/nodejs.webp" },
  { title: "Firebase", img: "/techs/firebase.webp" },
  { title: "JavaScript2", img: "/techs/javascript.webp" },
  { title: "TypeScript2", img: "/techs/typescript.webp" },
  { title: "React2", img: "/techs/react.webp" },
  { title: "NextJS2", img: "/techs/nextjs.webp" },
  { title: "TailwindCSS2", img: "/techs/tailwindcss.webp" },
  { title: "ChakraUI2", img: "/techs/chakraui.webp" },
  { title: "Stitches2", img: "/techs/stitches.webp" },
  { title: "Git y GitHub2", img: "/techs/github.webp" },
  { title: "Redux2", img: "/techs/redux.webp" },
  { title: "Storybook2", img: "/techs/storybook.webp" },
  { title: "NodeJS2", img: "/techs/nodejs.webp" },
  { title: "Firebase2", img: "/techs/firebase.webp" },
];
