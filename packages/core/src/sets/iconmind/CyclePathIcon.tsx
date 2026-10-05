import type { IconProps } from "../../shared/types";

export function CyclePathIcon({
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
      <path d="M2.5 12a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0m12 0a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0"/><path d="m6 12 3-3h6l3 3M9 5v4M2 19h20"/>
    </svg>
  );
}
