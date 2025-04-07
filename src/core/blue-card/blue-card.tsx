export default function BlueCard() {
  return (
    <section className="flex flex-col gap-3">
      <div className="bg-[#4085e7] w-full flex-1 rounded-[18px] flex flex-col p-4 gap-3">
        <div className="flex w-full gap-2 justify-between items-center">
          <h2 className="text-white text-xl font-semibold">Alguns Projetos</h2>
          <div className="flex items-center gap-1 rounded-full py-0.5 px-3 bg-[#70a3ed] text-white">
            <span className="text-sm">joaolima.vercel.app</span>
          </div>
        </div>
        <div className="w-full gap-2 flex h-full">
          <div className="flex flex-col flex-1 border-2 overflow-hidden border-[#9fc2f3] bg-white/[0.18] w-full rounded-lg">
            <div className="w-full bg-[#31616C] rounded-lg flex-1"></div>
            <div className="flex flex-col p-1 px-1.5 gap-0 pb-4">
              <span className="text-white font-semibold ">Vazio</span>
              <span className="text-white text-xs font-light">
                Um projeto vazio
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-1 border-2 overflow-hidden border-[#9fc2f3] bg-white/[0.18] w-full rounded-lg">
            <div className="w-full bg-[#31616C] rounded-lg flex-1"></div>
            <div className="flex flex-col p-1 px-1.5 gap-0 pb-4">
              <span className="text-white font-semibold ">Vazio</span>
              <span className="text-white text-xs font-light">
                Um projeto vazio
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[18px] bg-black border-gray-400 border-2 p-1.5">
        <div className="bg-transparent p-2 rounded-xl border-white border-2 flex items-center justify-between">
          <div className="flex gap-4 items-center justify-between w-full ">
            <img
              alt="QRCode para contato"
              src="/qrcode.svg"
              className="aspect-square h-[80px] rounded-md bg-white p-1"
            />
            <div className="flex flex-col justify-end text-white relative">
              <span className="text-[#fdbf45] text-sm">
                jg.limamarinho202@gmail.com
              </span>
              <span className="text-right">+55 (21) 99570-9913</span>
              <img
                alt="rabiscos"
                src="/rabisco.svg"
                className="right-0 bottom-[-8px] absolute w-full "
                style={{
                  maxWidth: "150px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
