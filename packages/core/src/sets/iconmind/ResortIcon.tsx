import type { IconProps } from "../../shared/types";

export function ResortIcon({
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
      <path d="M7 9v9M3.5 5.5a3.5 3.5 0 0 1 0 7"/><path d="M10.5 12.5a3.5 3.5 0 0 1 0-7M13 18v-7h9v7M2 18h20"/>
    </svg>
  );
}
