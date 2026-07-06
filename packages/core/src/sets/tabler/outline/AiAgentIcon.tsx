import type { IconProps } from "../../../shared/types";

export function AiAgentIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M11 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5-9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m15 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
