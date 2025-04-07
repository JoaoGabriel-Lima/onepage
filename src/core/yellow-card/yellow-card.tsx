import { YellowCardIdiomaItem } from "./components/idioma-item";
import { YellowCardInfoItem } from "./components/info-item";

export default function YellowCard() {
  return (
    <section className=" flex flex-col">
      <div className="bg-[#fdbf45] border-b-3 border-dashed w-full p-3 pt-3.5 px-5 rounded-[18px]">
        <h1 className="text-xl font-semibold">Sobre mim</h1>
      </div>
      <YellowCardInfoItem.Root>
        <YellowCardInfoItem.InfoItem title="Idade" value="18 anos" />
        <YellowCardInfoItem.InfoItem
          title="Localização"
          value="Niterói, Rio de Janeiro"
        />
        <YellowCardInfoItem.InfoItem
          title="Faculdade"
          value="Universidade Federal Fluminense"
        />
        <YellowCardInfoItem.InfoItem
          title="Portfólio"
          value="joaolima.vercel.app"
          withLine={false}
        />
      </YellowCardInfoItem.Root>
      <div className="flex w-full flex-1">
        <div className="w-full p-5 flex-grow bg-[#ebebeb] rounded-[18px] flex flex-col">
          <h2 className="font-bold text-xl">Idiomas</h2>

          <YellowCardIdiomaItem.Root>
            <YellowCardIdiomaItem.InfoItem idioma="Inglês" nivel="C1" />
            <YellowCardIdiomaItem.InfoItem idioma="Espanhol" nivel="A2" />
            <YellowCardIdiomaItem.InfoItem
              idioma="Português"
              nivel="Nativo"
              withLine={false}
            />
          </YellowCardIdiomaItem.Root>
        </div>
        <div className=" flex-grow bg-[#eb5a35] rounded-[18px] aspect-square h-full p-2.5">
          <div className="rounded-[10px] relative flex-1 h-full outline-3 outline-black flex justify-center  items-center">
            <div className="flex flex-col text-center pb-2 ">
              <span className="text-3xl font-extrabold">????</span>
              <span className="font-semibold">Lorem Ipsum</span>
            </div>
            <div className="absolute bottom-[5px] w-full flex justify-center items-center ">
              <span className="text-xs text-center">
                Fazendo <span className="font-bold">100 coisas</span> ao mesmo
                tempo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
