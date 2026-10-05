import type { IconProps } from "../../shared/types";

export function NudgeIcon({
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
      <path d="M16.32 7a5.5 5.5 0 1 1-4.64 0M3 12h3m0-2 2 2-2 2"/>
    </svg>
  );
}
