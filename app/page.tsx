import AboutDialog from "@/components/AboutDialog";
import SocialMedia from "@/components/SocialMedia";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import ContactDialog from "@/components/ContactDialog";
import Header from "@/components/Header";

const pandoUrl = "https://www.pando.ar/";
const pandoSignUp = "https://app.pando.ar/auth/signup/overview";
const platziUrl = "https://platzi.com/blog/olimpiadas-olympia-challenge/";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="flex flex-col items-center justify-center">
        <section className="grid w-full max-w-screen-md grid-cols-2 gap-3 px-5 lg:gap-5 lg:px-0">
          <div className="grid grid-rows-[auto_1fr] gap-3 lg:gap-5">
            <Card isCentered className="p-4 lg:p-8">
              <picture className="flex aspect-square h-max w-auto items-center justify-center rounded-xl bg-white p-1.5 text-black md:p-3 lg:h-20 lg:w-20 lg:rounded-2xl">
                <Image
                  src="/react-logo.svg"
                  alt="react logo"
                  width={60}
                  height={60}
                  priority
                  className="h-auto w-full"
                  draggable={false}
                />
              </picture>

              <Text
                as="h2"
                size="md"
                className="text-md ml-3 w-min leading-tight lg:ml-5"
              >
                Frontend Developer
              </Text>
            </Card>

            <Card isHighlighted isCentered delay={0.2} className="h-full p-4">
              <Text as="h1" size="xl">
                Nahuel
              </Text>
            </Card>
          </div>

          <Card delay={0.4} className="p-0 md:p-0 lg:p-0">
            <picture className="aspect-square">
              <Image
                src="/profile.webp"
                alt="profile"
                width={384}
                height={384}
                className="object-cover"
                priority
                draggable={false}
              />
            </picture>
          </Card>

          <div className="grid grid-rows-[1fr_auto] gap-3 md:gap-5">
            <AboutDialog />

            <Card isHighlighted isCentered delay={0.8} className="py-4 lg:py-8">
              <Text size="lg">Argentina</Text>
            </Card>
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-3 md:gap-5">
            <ContactDialog />

            <Card isCentered delay={1.2}>
              <Text className="text-center">Nice to e-meet you 👋</Text>
            </Card>
          </div>

          <Card className="col-span-2 flex items-center gap-3" delay={1.4}>
            <Text className="whitespace-nowrap">Technologies</Text>
            <Technologies />
          </Card>

          <Card className="col-span-2" delay={1.6}>
            <Text>{`I'm interested in ui, design systems, dev rel and user/dev experience.`}</Text>
          </Card>

          <div className="col-span-2 grid grid-cols-2 gap-3 md:grid-flow-dense md:gap-5">
            <Card className="col-span-2 flex aspect-video items-center justify-center bg-primary p-0 md:col-[2] md:p-0 lg:p-0">
              <a target="_blank" href={platziUrl} className="block w-full">
                <Image
                  src="/platzi-olimpiadas.webp"
                  alt="Pando logo"
                  width={374}
                  height={211}
                  className="h-auto w-full select-none object-cover"
                  draggable={false}
                />
              </a>
            </Card>

            <Card className="col-span-2 h-full md:col-[1] lg:py-8">
              <Text size="sm">
                In 2021, I won the first place prize of $9,000 in the Platzi
                Olimpiadas by building a complete ecommerce platform in just 10
                days.{" "}
                <a
                  href={platziUrl}
                  target="_blank"
                  className="text-primary underline"
                >
                  See more
                </a>
              </Text>
            </Card>
          </div>

          <Card className="col-span-2 aspect-video bg-primary p-0 md:col-auto md:p-0 lg:p-0">
            <a
              target="_blank"
              href={pandoUrl}
              className="flex h-full w-full items-center justify-center"
            >
              <picture className="block w-52">
                <Image
                  src="https://www.pando.ar/images/logo.png"
                  alt="Pando logo"
                  width={208}
                  height={45.5}
                  className="h-auto w-full select-none object-contain"
                  draggable={false}
                />
              </picture>
            </a>
          </Card>

          <Card className="col-span-2 h-full md:col-auto lg:py-8">
            <Text size="sm">
              {`I'm building `}
              <a
                href={pandoUrl}
                target="_blank"
                className="text-primary underline"
              >
                Pando
              </a>
              , a new way to manage your business, allowing small companies to
              have access to the latest technologies.{" "}
              <a
                href={pandoSignUp}
                target="_blank"
                className="text-primary underline"
              >
                Try it now!
              </a>
            </Text>
          </Card>
        </section>
      </main>

      <footer className="flex h-[50vh] flex-col items-center justify-between pb-12 pt-20 text-center md:h-[70vh] md:py-32 md:pb-20">
        <div>
          <Text as="h2" size="xl">{`Let's work together`}</Text>
          <Text size="lg" className="mt-6 md:mt-10">
            <span className="opacity-60">Get in touch </span>
            <a href="mailto:encinasnahuel3@gmail.com">here</a>
          </Text>
        </div>

        <SocialMedia />
      </footer>
    </>
  );
}
