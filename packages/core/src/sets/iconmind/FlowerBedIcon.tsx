import type { IconProps } from "../../shared/types";

export function FlowerBedIcon({
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
      <path d="M4 18h16M6 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v7m6-6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2v4"/>
    </svg>
  );
}
