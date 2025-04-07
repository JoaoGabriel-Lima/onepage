interface InfoItemProps {
  title: string;
  value: string;
  withLine?: boolean;
}

function InfoItemYellowCard({
  title,
  value,
  withLine = true,
}: Readonly<InfoItemProps>) {
  return (
    <>
      <div className="w-full justify-between  flex items-center py-1">
        <span>{title}</span>
        <span className="font-bold">{value}</span>
      </div>
      {withLine && <hr className="bg-[#7f6023] border-0 h-[1px]" />}
    </>
  );
}

function Root({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[#fdbf45] border-b-3 border-dashed w-full p-5 py-3 rounded-[18px] flex-col">
      {children}
    </div>
  );
}

export const YellowCardInfoItem = {
  Root,
  InfoItem: InfoItemYellowCard,
};
