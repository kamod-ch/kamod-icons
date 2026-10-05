import type { IconProps } from "../../shared/types";

export function TeaCeremonyIcon({
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
      <path d="M5 12h12v4c0 3-3 4-6 4s-6-1-6-4Zm12 2 3-3M7 12c0-3 2-5 4-5s4 2 4 5"/>
    </svg>
  );
}
