import type { IconProps } from "../../shared/types";

export function AgentGraphIcon({
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
      <path d="M7.69 2.37a4 4 0 1 1-3.38 0M12 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-4 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-2-3 2 2m4-2-2 2"/>
    </svg>
  );
}
