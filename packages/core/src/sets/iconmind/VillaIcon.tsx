import type { IconProps } from "../../shared/types";

export function VillaIcon({
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
      <path d="m2 11 6-6 6 6M4 11v8h8v-8m3 3 2-2 2 2 2-2m-6 7 2-2 2 2 2-2"/>
    </svg>
  );
}
