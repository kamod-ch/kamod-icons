import type { IconProps } from "../../../shared/types";

export function FileIsrIcon({
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
      <path d="M15 3v4a1 1 0 0 0 1 1h4"/><path d="M15 3v4a1 1 0 0 0 1 1h4"/><path d="M6 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-7"/><path d="m3 15 3-3 3 3"/>
    </svg>
  );
}
