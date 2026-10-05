import type { IconProps } from "../../shared/types";

export function BinPackIcon({
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
      <path d="M3 3v18h18"/><path d="M6 13.5a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm9.5 2.5a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2"/>
    </svg>
  );
}
