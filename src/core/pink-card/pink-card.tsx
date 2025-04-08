import AboutMePinkCard from "./components/about-me";

export default function PinkCard() {
  return (
    <section className="flex flex-col row-span-2 2xl:overflow-hidden">
      <div className="relative 2xl:max-h-[540px] bg-[#ffbad3] 2xl:overflow-hidden w-full h-full items-center justify-between flex flex-col rounded-[18px] p-4 pt-8">
        <div className="flex flex-col justify-center gap-1 ">
          <h1 className="text-center text-3xl font-semibold ">
            João Gabriel
            <br />
            Lima Marinho
          </h1>
          <span className="text-center leading-tight font-medium">
            Graduando de Ciência da
            <br />
            Computação na UFF
          </span>
        </div>
        <img
          alt="Estrela 1"
          src="/estrelas/estrela1.svg"
          className="absolute w-[29px] right-[9%] top-[25%] animate-pulse"
        />
        <img
          alt="Estrela 2"
          src="/estrelas/estrela2.svg"
          className="absolute w-[34px] left-[9%] top-[35%] animate-pulse"
        />
        <div className="relative w-full flex-1 flex justify-center items-center my-2 px-2.5">
          <img
            alt="Foto de João"
            src="/joao.png"
            className="h-full w-auto object-contain max-h-full"
          />
          <img
            alt="Sorriso"
            className="absolute top-[34%] right-[5%] w-[55px]"
            src="/estrelas/sorriso.svg"
          />
        </div>
      </div>
      <AboutMePinkCard />
    </section>
  );
}
