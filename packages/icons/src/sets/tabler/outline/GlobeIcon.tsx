import type { IconProps } from "../../../shared/types";

export function GlobeIcon({
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
      <path d="M7 9a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><path d="M5.75 15A8.015 8.015 0 1 0 15 2m-4 15v4m-4 0h8"/>
    </svg>
  );
}
