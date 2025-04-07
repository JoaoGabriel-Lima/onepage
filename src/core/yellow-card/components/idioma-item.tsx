interface InfoItemProps {
  idioma: string;
  nivel: string;
  withLine?: boolean;
}

function IdiomItemYellowCard({
  idioma,
  nivel,
  withLine = true,
}: Readonly<InfoItemProps>) {
  return (
    <>
      <div className="w-full justify-between  flex items-center py-1">
        <span>{idioma}</span>
        <span className="font-medium rounded-full px-2 text-sm py-0.5 bg-black text-white">
          {nivel}
        </span>
      </div>
      {withLine && <hr className="bg-[#767676] border-0 h-[1px]" />}
    </>
  );
}

function Root({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="bg-[#ebebeb] w-full flex-col">{children}</div>;
}

export const YellowCardIdiomaItem = {
  Root,
  InfoItem: IdiomItemYellowCard,
};
