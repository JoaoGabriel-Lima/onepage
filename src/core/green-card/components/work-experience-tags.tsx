interface WorkExperienceTagsProps {
  title: string;
  backgroundColor: string;
  textColor: string;
  isOutline?: boolean;
}

export default function WorkExperienceTags(
  props: Readonly<WorkExperienceTagsProps>
) {
  return (
    <div
      className="px-2 py-0 "
      style={{
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        border: props.isOutline ? `1px solid ${props.textColor}` : "none",
        borderRadius: "9999px",
      }}
    >
      <span className="text-[14px] font-medium text-nowrap">{props.title}</span>
    </div>
  );
}
