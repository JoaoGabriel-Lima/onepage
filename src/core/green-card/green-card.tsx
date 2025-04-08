import { WorkExperience } from "./components/work-experience";

export default function GreenCard() {
  return (
    <section className="bg-[#005e42] row-span-2 p-5 flex flex-col gap-4">
      <section className="flex-1 flex flex-col pt-1 gap-2">
        <span className="text-white text-2xl font-semibold">
          Minhas Vivências e Aprendizados
        </span>
        <div className="w-full flex-1 flex-row p-2 gap-2 flex border-3 border-white/[0.18] bg-[#3D8D75] rounded-[12px]">
          <img
            src="/vivencias/all3.png"
            id="wallphotos"
            className="rounded-lg h-full w-full object-cover"
          />
        </div>
      </section>
      <section className="bg-[#ffffff] px-6 py-5 flex-1 rounded-[12px] flex flex-col gap-2">
        <span className="text-black  text-xl font-bold">
          Algumas Experiências de Trabalho
        </span>
        <div className="w-full flex flex-col gap-2 ">
          <WorkExperience.Card
            props={{
              title: "YSMART",
              showBottomLine: true,
              description:
                "> Como estagiário na YSMART (UFF), desenvolvi o N-Watch para monitoramento de redes em subestações usando React, Electron e TypeScript. Implementei dashboards em tempo real e alertas de anomalias (IEC 61850), reduzindo diagnósticos de falhas em 30%. Versão estável, elogiada por intuitividade, está em implantação na primeira subestação digital do Brasil.",
            }}
          >
            <WorkExperience.Tag
              backgroundColor="#005E42"
              title="Acadêmico"
              textColor="white"
            />
            <WorkExperience.Tag
              backgroundColor="#764b8f"
              title="Estágio"
              textColor="white"
            />
            <WorkExperience.Tag
              backgroundColor="transparent"
              isOutline={true}
              title="desde 2023"
              textColor="black"
            />
          </WorkExperience.Card>
          <WorkExperience.Card
            props={{
              title: "MoveUFF",
              showBottomLine: true,
              subTitle: "Prêmio de Excelência UFF 2024",
              description:
                "> Desenvolvimento de um sistema de rastreamento em tempo real das bicicletas elétricas, utilizando um mapa interativo para permitir o acompanhamento da localização das bikes utilizadas por alunos e professores da universidade com foco em promover mobilidade urbana sustentável pelos campus da UFF.",
            }}
          >
            <WorkExperience.Tag
              backgroundColor="#005E42"
              title="Acadêmico"
              textColor="white"
            />
            <WorkExperience.Tag
              backgroundColor="#ffb723"
              title="Premiado"
              textColor="black"
            />
            <WorkExperience.Tag
              backgroundColor="transparent"
              isOutline={true}
              title="desde 2023"
              textColor="black"
            />
          </WorkExperience.Card>
          <WorkExperience.Card
            props={{
              title: "EthereumRio",
              subTitle: "1° Lumx Hackathon ETH Rio 2024",
              showBottomLine: false,
              description:
                "> Na EthereumRio 2024, fui desenvolvedor no time vencedor (LumxHack + Scroll) com o Freedomchains, solução Web3 que integra blockchain e IA para transparência no sistema carcerário. Desenvolvi arquitetura de registros imutáveis de comportamento de presos, dashboards em tempo real e ZK-proofs para privacidade (LGPD).",
            }}
          >
            <WorkExperience.Tag
              backgroundColor="#005E42"
              title="Acadêmico"
              textColor="white"
            />
            <WorkExperience.Tag
              backgroundColor="#ffb723"
              title="Premiado"
              textColor="black"
            />
            <WorkExperience.Tag
              backgroundColor="#000"
              title="Hackathon"
              textColor="white"
            />
            <WorkExperience.Tag
              backgroundColor="transparent"
              isOutline={true}
              title="2024"
              textColor="black"
            />
          </WorkExperience.Card>
        </div>
      </section>
    </section>
  );
}
