import type { IconProps } from "../../shared/types";

export function VoiceAgentIcon({
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
      <path d="M9.11 7.47a5 5 0 1 1-4.22 0M15 9v6m3-10v14m3-9v4"/>
    </svg>
  );
}
