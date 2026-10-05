import type { IconProps } from "../../shared/types";

export function BinFullIcon({
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
      <path d="M6 12v8h12v-8M4 12h16M8 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
