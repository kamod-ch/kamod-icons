import type { IconProps } from "../../shared/types";

export function PastaIcon({
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
      <path d="M3 12h18c0 4-4 7-9 7s-9-3-9-7m4 0a5 5 0 0 1 10 0"/><path d="M10 12a2 2 0 0 1 4 0"/>
    </svg>
  );
}
