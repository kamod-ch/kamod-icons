import type { IconProps } from "../../shared/types";

export function SkyClearIcon({
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
      <path d="M7.5 9a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0m-3-4.5L7 7m12.5-2.5L17 7M2 9h3m14 0h3M2 19h20"/>
    </svg>
  );
}
