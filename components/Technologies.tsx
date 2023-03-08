"use client";

import Image from "next/image";

export default function Technologies() {
  return (
    <div className="relative m-auto w-auto overflow-hidden">
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
  { title: "JavaScript", img: "/techs/javascript.png" },
  { title: "TypeScript", img: "/techs/typescript.png" },
  { title: "React", img: "/techs/react.png" },
  { title: "NextJS", img: "/techs/nextjs.png" },
  { title: "TailwindCSS", img: "/techs/tailwindcss.png" },
  { title: "ChakraUI", img: "/techs/chakraui.png" },
  { title: "Stitches", img: "/techs/stitches.png" },
  { title: "Git y GitHub", img: "/techs/github.png" },
  { title: "Redux", img: "/techs/redux.png" },
  { title: "Storybook", img: "/techs/storybook.png" },
  { title: "NodeJS", img: "/techs/nodejs.png" },
  { title: "Firebase", img: "/techs/firebase.png" },
  { title: "JavaScript2", img: "/techs/javascript.png" },
  { title: "TypeScript2", img: "/techs/typescript.png" },
  { title: "React2", img: "/techs/react.png" },
  { title: "NextJS2", img: "/techs/nextjs.png" },
  { title: "TailwindCSS2", img: "/techs/tailwindcss.png" },
  { title: "ChakraUI2", img: "/techs/chakraui.png" },
  { title: "Stitches2", img: "/techs/stitches.png" },
  { title: "Git y GitHub2", img: "/techs/github.png" },
  { title: "Redux2", img: "/techs/redux.png" },
  { title: "Storybook2", img: "/techs/storybook.png" },
  { title: "NodeJS2", img: "/techs/nodejs.png" },
  { title: "Firebase2", img: "/techs/firebase.png" },
];
