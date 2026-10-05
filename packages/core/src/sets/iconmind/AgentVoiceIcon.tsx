import type { IconProps } from "../../shared/types";

export function AgentVoiceIcon({
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
      <path d="M8.69 8.37a4 4 0 1 1-3.38 0m11.81 1.51a3 3 0 0 1 0 4.24m2.12-6.36a6 6 0 0 1 0 8.5"/>
    </svg>
  );
}
