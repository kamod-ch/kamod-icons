import type { IconProps } from "../../shared/types";

export function ChaosExperimentIcon({
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
      <path d="M10 3h4v6l6 6v6H4v-6l6-6Z"/><path d="m12 12-3 3h3l-3 3"/>
    </svg>
  );
}
