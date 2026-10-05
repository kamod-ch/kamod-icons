import type { IconProps } from "../../shared/types";

export function GoldSetIcon({
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
      <path d="M4 15v4h16v-4M9 8.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-2v4"/>
    </svg>
  );
}
