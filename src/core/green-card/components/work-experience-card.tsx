interface WorkExperienceCardProps {
  title: string;
  description: string;
  showBottomLine?: boolean;
  subTitle?: string;
}

export default function WorkExperienceCard({
  props,
  children,
}: Readonly<{
  props: WorkExperienceCardProps;
  children?: React.ReactNode;
}>) {
  return (
    <section className="w-full flex flex-col gap-2">
      <section className="flex w-full gap-5 justify-between items-start max-2xl:flex-col">
        <section className="flex flex-col w-full">
          <h1 className="font-semibold text-lg ">
            {props.title}{" "}
            {props.subTitle && (
              <span className="text-sm rounded-full bg-[#feb635] text-[#3f2c0a] px-1.5">
                {props.subTitle}
              </span>
            )}
          </h1>
          <p className="text-justify text-sm text-gray-800">
            {props.description}
          </p>
        </section>
        <section className="flex flex-col items-end gap-[3px] max-2xl:flex-row">
          {children}
        </section>
      </section>
      {props.showBottomLine && (
        <hr className="w-full h-[1px] bg-gray-400 border-0 " />
      )}
    </section>
  );
}
