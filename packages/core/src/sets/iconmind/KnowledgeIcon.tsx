import type { IconProps } from "../../shared/types";

export function KnowledgeIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M7 9a5 5 0 1 0 10 0A5 5 0 1 0 7 9m2 8h6m-5 3h4"/>
    </svg>
  );
}
