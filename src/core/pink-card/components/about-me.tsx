export default function AboutMePinkCard() {
  return (
    <div
      style={{
        borderTop: "3.5px dashed #000",
      }}
      className="w-full bg-white flex-1  rounded-[18px] flex p-5 flex-col gap-1 justify-start  "
    >
      <h2 className="text-xl font-bold">Um pouco sobre mim 👋 </h2>
      <p className="text-justify leading-snug text-[15px] font-medium">
        Com sólida experiência em{" "}
        <span className="font-semibold">desenvolvimento web</span> e como{" "}
        <span className="font-semibold">bolsista de iniciação tecnológica</span>
        , durante minha jornada acadêmica, contribuo para diversos projetos de
        pesquisa e aplico meus conhecimentos práticos em soluções inovadoras.
        Minhas principais habilidades estão relacionadas à{" "}
        <span className="text-[#6C0027] font-semibold">
          desenvolvimento de aplicações web, otimização de processos
          computacionais, e utilização de boas práticas de engenharia de
          software.
        </span>
      </p>
    </div>
  );
}
