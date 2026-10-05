import type { IconProps } from "../../shared/types";

export function QualityIcon({
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
      <path d="M6 9a6 6 0 1 0 12 0A6 6 0 1 0 6 9"/><path d="m9 9 2 2 4-4m-7 7v7m8-7v7"/>
    </svg>
  );
}
