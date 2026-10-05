import type { IconProps } from "../../shared/types";

export function AgentPhoneIcon({
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
      <path d="M8.69 3.37a4 4 0 1 1-3.38 0M14 13a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Zm2 1h3"/>
    </svg>
  );
}
