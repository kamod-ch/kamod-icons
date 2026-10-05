import type { IconProps } from "../../shared/types";

export function ScienceExperimentIcon({
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
      <path d="M10 3h4v5.5a6.5 6.5 0 1 1-4 0Z"/><path d="M9 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3.5 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
