export default function GreenCard() {
  return (
    <section className="bg-[#005e42] row-span-2 p-5 flex flex-col gap-4">
      <section className="flex-1 flex flex-col pt-1 gap-2">
        <span className="text-white text-2xl font-semibold">
          Minhas Vivências e Aprendizados
        </span>
        <div className="w-full flex-1 p-4 gap-2 border-3 border-white/[0.18] bg-[#3D8D75] rounded-[12px]"></div>
      </section>
      <section className="bg-[#ffffff] px-4 py-5 flex-1 rounded-[12px]">
        <span className="text-black  text-xl font-bold">
          Algumas Experiências de Trabalho
        </span>
      </section>
    </section>
  );
}
