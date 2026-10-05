import type { IconProps } from "../../shared/types";

export function PebbleIcon({
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
      <path d="M3 9a4 4 0 1 0 8 0 4 4 0 1 0-8 0m9.5-1a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m-5 9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0"/>
    </svg>
  );
}
