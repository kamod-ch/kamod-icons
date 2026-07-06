import type { IconProps } from "../../../shared/types";

export function KarateIcon({
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
      <path d="m3 9 4.5 1 3 2.5M13 21v-8l3-5.5"/><path d="m8 4.5 4 2 4 1 4 3.5-2 3.5M15.007 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
