import type { IconProps } from "../../shared/types";

export function CatIcon({
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
      <path d="M5 13V5l4 4c1-.5 5-.5 6 0l4-4v8c1 2 1 5-1 7S8 22 6 20s-2-5-1-7"/><path d="m10 15 2 2 2-2"/>
    </svg>
  );
}
