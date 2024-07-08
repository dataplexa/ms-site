"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SocialLinks from "@/components/social-links";
import Image from "next/image";
import {
  Accordion,
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import Marquee from "react-fast-marquee";
import homeData from "@/lib/homeData";
import { ArrowUpIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projectsCard";
import projectsList from "@/lib/projectsData";
import { cn } from "@/lib/utils";

const container = {
  show: {
    transition: {
      delayChildren: 0.6,
    },
  },
};


export default function Home() {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) =>
        prevIndex === homeData.headerBanner.images.length - 1
          ? 0
          : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main>
        <div>
          <SocialLinks
            className={
              "hidden lg:flex absolute z-20 left-7 top-1/2 -translate-y-1/2"
            }
          />

          <ul className="grid w-full">
            {homeData.headerBanner.images.map((image, index) => {
              return (
                <li
                  style={{
                    background: `linear-gradient(to right, rgba(0, 0, 0, 0.5) 10%, rgba(0,0,0,0.1) 30%) , url(${image}) no-repeat center center/cover`,
                  }}
                  className={cn(
                    "relative grid justify-center w-full min-h-screen overflow-hidden col-start-1 col-end-3 row-start-1 row-end-3 transition-all duration-1000",
                    current === index ? "opacity-100" : "opacity-0"
                  )}
                  key={index}
                >
                  <motion.div
                    key={current}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="container relative flex flex-col justify-center col-start-1 col-end-3 row-start-1 row-end-3 gap-6 overflow-hidden sm:gap-10"
                  >
                    <SocialLinks className={"flex-row lg:hidden "} />
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative bg-[linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),url(/blueprint.jpg)] bg-contain bg-top bg-no-repeat">
          <div className="absolute inset-0 z-10 flex justify-center pointer-events-none">
            <div className="max-w-7xl grid w-full h-full grid-cols-2 sm:grid-cols-[repeat(3,1fr)] gap-40 px-10">
              <div className="border-x border-accent/10" />
              <div className="border-x border-accent/10" />
              <div className="border-x border-accent/10" />
            </div>
          </div>

          <section
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "1000px" }}

            className="container flex flex-col min-h-screen gap-5 pt-32 "
          >
            <h2 id="about" className="title">SERVIÇOS</h2>

            <div className="grid gap-10 mt-10 md:grid-cols-[0.8fr_1fr]">
              <Image
                className="relative w-full"
                src={homeData.services.image}
                alt="Nossos servicos"
                width={900}
                height={1350}
                quality={100}

              />

              <Accordion defaultValue={["1"]} type="multiple" collapsible>
                {homeData.services.servicesList.map((service) => (
                  <AccordionItem key={service.id} value={service.id}>
                    <AccordionTrigger>{service.title}</AccordionTrigger>
                    <AccordionContent>{service.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          <section className="relative mt-20">
            <Marquee className="bg-[url(/sign_banner.png)] bg-cover bg-center py-60">
              <p className="font-heading 1 [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:lightgray] text-transparent mx-20 text-8xl">
                CONTRUÇÃO MODERNA
              </p>
              <p className="font-heading 1 [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:lightgray] text-transparent mx-20 text-8xl">
                DESIGN DE INTERIORES
              </p>
              <p className="font-heading 1 [-webkit-text-stroke-width:2px] [-webkit-text-stroke-color:lightgray] text-transparent mx-20 text-8xl">
                FORA DA CAIXA
              </p>
            </Marquee>

            <span className="absolute top-0 inset-x-0 block h-10 bg-white [clip-path:ellipse(52%_100%_at_50%_0%)]"></span>
            <span className="absolute bottom-0 inset-x-0 block h-10 bg-white [clip-path:ellipse(52%_100%_at_50%_100%)]"></span>
          </section>

          <section className="py-10 mt-20 bg-muted">
            <div className="container">
              <h2 className="title">PROJETOS</h2>

              <div className="grid gap-6 mt-4 lg:grid-cols-[0.7fr_1fr] sm:items-center sm:gap-x-10">
                <p className="text-3xl font-bold sm:text-5xl">
                  Estilo que conta uma história
                </p>
                <p className="max-w-lg">
                  Cada projeto conta uma narrativa única. De residências
                  elegantes a espaços comerciais inovadores, nossas criações são
                  testemunhas de histórias que se desdobram através da
                  arquitetura envolvente.
                </p>
              </div>
            </div>

            <Carousel
              opts={{
                align: "start",
                breakpoints: {
                  "(min-width: 768px)": { slidesToScroll: 2 },
                },
              }}
              className="relative z-20 mt-16"
            >
              <CarouselContent className="-ml-0">
                {projectsList
                  .filter((project) => project.showInHome)
                  .map((project, index) => (
                    <CarouselItem
                      key={index}
                      className="relative pl-0 sm:basis-1/2 lg:basis-1/4"
                    >
                      <ProjectCard
                        category={project.category}
                        title={project.title}
                        coverImage={project.coverImage}
                        endpoint={project.endpoint}
                      />
                    </CarouselItem>
                  ))}
              </CarouselContent>

              <CarouselIndicator />
              <CarouselNext size="md" />
              <CarouselPrevious size="md" />

              <div className="flex justify-center mt-8 sm:mt-0">
                <Button
                  asChild
                  size="lg"
                  className="flex-col gap-3 text-sm border-4 rounded-full sm:text-base sm:-translate-y-14 size-28 sm:size-40 border-muted"
                >
                  <Link href="/projetos">
                    <ArrowUpIcon className="animate-bounce size-6 sm:size-8" />
                    Ver todos
                  </Link>
                </Button>
              </div>
            </Carousel>
          </section>

          <section className="container mt-24">
            <h2 className="title-center">NOSSOS VALORES</h2>
            <p className="mt-4 text-3xl font-bold text-center sm:text-5xl">
              Valores que nos inspiram
            </p>

            <div className="grid gap-20 mt-24 lg:grid-cols-3">
              {homeData.values.map((value, index) => (
                <div
                  key={index}
                  className="z-20 flex flex-col gap-4 p-6 border bg-secondary"
                >
                  <div className="p-4 border rounded-full -mt-14 bg-secondary size-16">
                    <Image src="/quotes.png" alt="" width={32} height={32} quality={100} />
                  </div>
                  <h3 className="text-2xl font-heading text-accent">
                    {value.title}
                  </h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section

            className="py-20 mt-32 bg-[url(/press.jpg)] bg-center relative z-20"
          >
            <div className="container">
              <h2 className="title text-muted before:bg-muted">IMPRENSA</h2>
              <p className="mt-6 text-5xl font-bold text-secondary">
                M² Arquitetura na mídia
              </p>

              <div className="grid grid-cols-1 gap-10 mt-20 xs:grid-cols-2 lg:gap-20 md:grid-cols-3">
                <div className="md:row-span-2">
                  <Image
                    className="w-full"
                    src={homeData.news[1].cover}
                    alt={homeData.news[1].title}
                    width={600}
                    height={400}
                    quality={100}
                  />
                  <h3 className="mt-2 text-secondary">
                    {homeData.news[1].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[1].date}
                  </span>
                  <a
                    href={homeData.news[1].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div>
                  <Image
                    className="w-full md:aspect-square"
                    src={homeData.news[0].cover}
                    alt={homeData.news[0].title}
                    width={600}
                    height={400}
                    quality={100}
                  />

                  <h3 id="imprensa" className="mt-2 text-secondary">
                    {homeData.news[0].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[0].date}
                  </span>
                  <a
                    href={homeData.news[0].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div className="md:row-span-2">
                  <Image
                    className="w-full"
                    src={homeData.news[3].cover}
                    alt={homeData.news[3].title}
                    width={600}
                    height={400}
                    quality={100}

                  />
                  <h3 className="mt-2 text-secondary">
                    {homeData.news[3].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[3].date}
                  </span>
                  <a
                    href={homeData.news[3].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div className="md:row-span-2">
                  <Image
                    className="w-full"
                    src={homeData.news[5].cover}
                    alt={homeData.news[5].title}
                    width={600}
                    height={400}
                    quality={100}
                  />
                  <h3 className="mt-2 text-secondary">
                    {homeData.news[5].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[5].date}
                  </span>
                  <a
                    href={homeData.news[5].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div className="md:row-span-2 md:row-start-2 md:col-start-2">
                  <Image
                    className="w-full md:aspect-square"
                    src={homeData.news[2].cover}
                    alt={homeData.news[2].title}
                    width={600}
                    height={400}
                    quality={100}
                  />
                  <h3 className="mt-2 text-secondary">
                    {" "}
                    {homeData.news[2].title}{" "}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[2].date}
                  </span>
                  <a

                    href={homeData.news[2].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div className="md:row-span-2">
                  <Image
                    className="w-full "
                    src={homeData.news[6].cover}
                    alt={homeData.news[6].title}
                    width={600}
                    height={400}
                    quality={100}
                  />
                  <h3 className="mt-2 text-secondary">
                    {homeData.news[6].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[6].date}
                  </span>
                  <a

                    href={homeData.news[6].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>

                <div className="md:row-start-4 md:row-span-2 md:col-start-2">
                  <Image
                    className="w-full md:aspect-square"
                    src={homeData.news[4].cover}
                    alt={homeData.news[4].title}
                    width={600}
                    height={400}
                    quality={100}
                  />
                  <h3 className="mt-2 text-secondary">
                    {homeData.news[4].title}
                  </h3>
                  <span className="flex items-center gap-2 text-xs text-muted">
                    <CalendarIcon />
                    {homeData.news[4].date}
                  </span>
                  <a
                    href={homeData.news[4].link}
                    target="_blank"
                    className="mt-4 text-xs tracking-wider border-b border-white cursor-pointer text-secondary font-heading hover:border-accent hover:text-muted w-fit"
                  >
                    LER MAIS
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="container mt-32 ">
            <div className="flex flex-col items-center lg:flex-row">
              <div className="relative self-stretch flex-1 min-h-full">
                <Image
                  className="relative z-30 object-cover object-center w-full h-full lg:-translate-y-10"
                  src={homeData.team.image}
                  alt="Time M ao quadrado"
                  width={900}
                  height={1200}
                  quality={100}
                />
              </div>
              <span className="hidden lg:block w-full h-px bg-accent flex-[0.2]"></span>
              <div className="relative z-20 flex flex-col self-stretch gap-6 p-6 border flex-1 lg:flex-[1.5] border-accent bg-secondary">
                <h2 className="title">NOSSO TIME</h2>
                <strong className="text-xl lg:text-3xl">
                  {homeData.team.title}
                </strong>
                <p className="text-sm md:text-base lg:text-lg">
                  {homeData.team.description}
                </p>
              </div>
            </div>
          </section>

          <section className="container mt-44">
            <h2 className="title">CONTATO</h2>
            <p className="mt-4 text-3xl font-bold sm:text-5xl">
              Entre em contato
            </p>

            <div className="grid gap-8 mt-20 md:grid-cols-2">
              <ul className="flex flex-col gap-8 md:pt-5">
                <li className="flex flex-col gap-1">
                  <Icons.mail className="text-primary" />
                  <span className="text-xl font-bold"> E-mail</span>
                  <a
                    className="text-accent"
                    target="_blank"
                    href="mailto:hcontato@mao2.arq.br"
                  >
                    marcio.monteiro@mao2.arq.br
                  </a>
                  <a
                    className="text-accent"
                    target="_blank"
                    href="mailto:hcontato@mao2.arq.br"
                  >
                    allan.nagliati@mao2.arq.br
                  </a>
                </li>

                <li className="flex flex-col gap-1">
                  <Icons.whatsapp className="text-primary size-8" />
                  <span className="text-xl font-bold">Whatsapp</span>
                  <a
                    className="text-accent"
                    target="_blank"
                    href="https://wa.link/f7r5hg"
                  >
                    ‪+55 11 2691‑7281‬
                  </a>
                </li>

                <li className="flex flex-col gap-1">
                  <Icons.location className="text-primary" />
                  <span className="text-xl font-bold">Escritório</span>
                  <span className="text-base">
                    Rua Gomes de Carvalho, 621 - 12º andar - cjto. 1201
                  </span>
                  <a

                    className="flex items-center gap-2 text-accent"
                    target="_blank"
                    href="https://maps.app.goo.gl/T9q41LCMNnkS8yts5"
                  >
                    Como chegar <Icons.arrow className="w-3 h-3 rotate-180" />
                  </a>
                </li>
              </ul>

              <iframe
                className="max-w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117649.83362084167!2d-43.32487861013211!3d-22.855862591868934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce575286a19bad%3A0xbc4324897df9780d!2sM%20Ao%202%20Arquitetura!5e0!3m2!1spt-BR!2sbr!4v1714492993097!5m2!1spt-BR!2sbr"
                width={600}
                height={450}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
        </div>

      </main>
    </>
  );
}
