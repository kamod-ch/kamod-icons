import type { IconProps } from "../../shared/types";

export function ForEachIcon({
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
      <path d="M15.8 3.84a9 9 0 1 1-7.6 0"/><path d="M6 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
