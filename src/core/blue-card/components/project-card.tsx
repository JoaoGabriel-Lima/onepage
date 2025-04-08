interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
}

export default function ProjectCard(props: Readonly<ProjectCardProps>) {
  return (
    <div className="flex flex-col flex-1 border-2 overflow-hidden border-[#9fc2f3] bg-white/[0.18] w-full rounded-lg">
      <button
        className="w-full bg-[#31616C] rounded-lg flex-1 cursor-pointer"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={props.onClick}
      ></button>
      <div className="flex flex-col p-1 px-1.5 gap-0 pb-4">
        <span className="text-white font-semibold ">{props.title}</span>
        <span className="text-white text-xs font-light">
          {props.description}
        </span>
      </div>
    </div>
  );
}
