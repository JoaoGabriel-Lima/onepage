export default function ContactCard() {
  return (
    <div className="rounded-[18px] bg-black border-gray-400 border-2 p-1.5">
      <div className="bg-transparent p-2 rounded-xl border-white border-2 flex items-center justify-between">
        <div className="flex gap-4 items-center justify-between w-full ">
          <img
            alt="QRCode para contato"
            src="/qrcode.svg"
            className="aspect-square h-[80px] rounded-md bg-white p-1"
          />
          <div className="flex flex-col justify-end text-white relative">
            <a
              href="mailto:jg.limamarinho202@gmail.com"
              className="text-[#fdbf45] text-sm hover:underline"
            >
              jg.limamarinho202@gmail.com
            </a>
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
  );
}
