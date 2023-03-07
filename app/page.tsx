import AboutDialog from "@/components/AboutDialog";
import SocialMedia from "@/components/SocialMedia";
import Technologies from "@/components/Technologies";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Text } from "@/components/ui/text";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center pt-40 pb-20">
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
            <Card isHighlighted isCentered className="h-full p-4">
              <Text as="h1" size="xl">
                Nahuel
              </Text>
            </Card>
          </div>

          <picture className="aspect-square overflow-hidden rounded-xl">
            <Image
              src="/profile.png"
              alt="profile"
              width={375}
              height={375}
              className="object-cover"
              priority
              draggable={false}
            />
          </picture>

          <div className="grid grid-rows-[1fr_auto] gap-3 md:gap-5">
            <Card className="text-primary">
              <Text size="sm">
                A creative thinker and problem solver who loves to create UI
                designs that are both visually pleasing and functionally sound.
              </Text>
            </Card>
            <Card isHighlighted isCentered className="py-4 lg:py-8">
              <Text size="lg">Argentina</Text>
            </Card>
          </div>

          <div className="grid grid-rows-[auto_1fr] gap-3 md:gap-5">
            <AboutDialog>
              <Card
                isHighlighted
                isCentered
                className="cursor-pointer py-4 transition-transform active:scale-[0.98] lg:py-8"
              >
                <Text>Contact me</Text>
              </Card>
            </AboutDialog>

            <Card isCentered>
              <Text className="text-center">Nice to e-meet you 👋</Text>
            </Card>
          </div>

          <Card className="col-span-2 flex items-center gap-5">
            <Text className="whitespace-nowrap">Technologies</Text>
            <Technologies />
          </Card>

          <Card className="col-span-2">
            <Text>{`I'm interested in ui, design systems, dev rel and user/dev experience.`}</Text>
          </Card>

          <Card className="col-span-2 flex aspect-video items-center justify-center bg-primary p-0 md:col-auto md:p-0 lg:p-0">
            <picture className="block w-52">
              <Image
                src="https://www.pando.ar/images/logo.png"
                alt="Pando logo"
                width={208}
                height={45.5}
                className="h-auto w-full object-contain select-none"
                draggable={false}
              />
            </picture>
          </Card>

          <Card className="col-span-2 h-full md:col-auto lg:py-8">
            <Text size="sm">
              {`I'm building `}
              <a href="/#" className="text-primary underline">
                Pando
              </a>
              , a new way to manage your business, allowing small companies to
              have access to the latest technologies.{" "}
              <a href="/#" className="text-primary underline">
                Try it now!
              </a>
            </Text>
          </Card>
        </section>
      </main>

      <footer className="flex h-[60vh] flex-col items-center justify-between py-20 text-center md:h-[80vh]">
        <div>
          <Text as="h2" size="xl">{`Let's work together`}</Text>
          <Text size="lg" className="mt-6 md:mt-10">
            <span className="opacity-60">Get in touch </span>
            <a href="/#">here</a>
          </Text>
        </div>

        <SocialMedia />
      </footer>
    </>
  );
}
