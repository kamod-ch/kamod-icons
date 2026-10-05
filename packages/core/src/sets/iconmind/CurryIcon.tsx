import type { IconProps } from "../../shared/types";

export function CurryIcon({
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
      <path d="M2 13h20c0 4-4 7-10 7S2 17 2 13m2 0a4 4 0 0 1 8 0m3-3a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
