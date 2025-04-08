import { LuLink } from "react-icons/lu";
import ProjectCard from "./components/project-card";
import ContactCard from "./contact-card";

export default function BlueCard() {
  return (
    <section className="flex flex-col gap-3">
      <div className="bg-[#4085e7] w-full flex-1 rounded-[18px] flex flex-col p-4 gap-3">
        <div className="flex w-full gap-2 justify-between items-center">
          <h2 className="text-white text-xl font-semibold">Alguns Projetos</h2>
          <a
            href="https://joaolima.vercel.app"
            target="_blank"
            className="flex items-center gap-1.5 rounded-full py-0.5 px-3 bg-[#70a3ed] text-white"
          >
            <LuLink size={14} />
            <span className="text-sm">joaolima.vercel.app</span>
          </a>
        </div>
        <div className="w-full gap-2 flex h-full">
          <ProjectCard
            title="DAlianças"
            description="Sistema completo de e-commerce e gerenciamento"
            image="/projects/1.png"
            onClick={() =>
              window.open(
                "https://joaolima.vercel.app/projects/daliancas",
                "_blank"
              )
            }
          />
          <ProjectCard
            title="Rastros Perdidos"
            description="Jogo autoral 16-bit desenvolvido em Python"
            image="/projects/2.png"
            onClick={() =>
              window.open(
                "https://joaolima.vercel.app/projects/rastros_perdidos",
                "_blank"
              )
            }
          />
        </div>
      </div>
      <ContactCard />
    </section>
  );
}
