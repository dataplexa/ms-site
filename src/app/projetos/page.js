import React from "react";
import Projects from "./projects";

export const metadata = {
  title: "M² Arquitetura | Projetos",
  description: "M² | Portfólio de Projetos",
};

const Projetos = () => {
  return (
    <>
      <main className="mt-14">
        <section className="container mt-28 sm:mt-36">
          <div className="flex flex-col items-center w-full gap-3 mb-14 sm:mb-20 md:mb-28">
            <h1 className="text-base text-center md:text-lg title-center">
              PROJETOS
            </h1>
            <p className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
              Explore os nossos melhores trabalhos
            </p>
          </div>

          <Projects />

        </section>
      </main>
    </>
  );
};

export default Projetos;