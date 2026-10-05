import type { IconProps } from "../../shared/types";

export function AvalancheIcon({
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
      <path d="m3 16 8-8 3 3 5 5"/><path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4-2a1 1 0 1 0 2 0 1 1 0 1 0-2 0M2 20h20"/>
    </svg>
  );
}
