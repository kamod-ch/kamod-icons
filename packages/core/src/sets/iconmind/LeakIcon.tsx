import type { IconProps } from "../../shared/types";

export function LeakIcon({
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
      <path d="M2 8h20M10 5v6m4-6v6m-2 2 2.5 2.5a3 3 0 1 1-5 0Z"/>
    </svg>
  );
}
