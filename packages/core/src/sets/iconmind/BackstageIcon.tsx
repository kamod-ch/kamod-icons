import type { IconProps } from "../../shared/types";

export function BackstageIcon({
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
      <path d="M2 4h20M3 4v17h2.5C7 21 7 20 7 18V4m14 0v17h-2.5C17 21 17 20 17 18V4m-7 17v-9h4v9"/>
    </svg>
  );
}
