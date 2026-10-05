import type { IconProps } from "../../shared/types";

export function AnycastIcon({
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
      <path d="M10 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5.89 9.78a6.5 6.5 0 0 1 12.22 0"/><path d="M2.6 8.58a10 10 0 0 1 18.8 0m-3.29 5.64a6.5 6.5 0 0 1-12.22 0"/><path d="M21.4 15.42a10 10 0 0 1-18.8 0"/>
    </svg>
  );
}
