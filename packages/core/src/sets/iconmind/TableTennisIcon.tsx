import type { IconProps } from "../../shared/types";

export function TableTennisIcon({
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
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7 7v4m8-15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
