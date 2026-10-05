import type { IconProps } from "../../shared/types";

export function TrowelIcon({
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
      <path d="M7 12h10c0 4-3 7-5 9-2-2-5-5-5-9m5-5v5m-2-8h4v3h-4Z"/>
    </svg>
  );
}
