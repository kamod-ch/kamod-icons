import type { IconProps } from "../../shared/types";

export function PipelineCiIcon({
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
      <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2 2.5 2.5 0 0 1 7 4.5 2.5 2.5 0 0 1 4.5 7 2.5 2.5 0 0 1 2 4.5m7.5 0A2.5 2.5 0 0 1 12 2a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1-2.5-2.5m7.5 0A2.5 2.5 0 0 1 19.5 2 2.5 2.5 0 0 1 22 4.5 2.5 2.5 0 0 1 19.5 7 2.5 2.5 0 0 1 17 4.5m2.5 5.5v4M17 19.5a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5"/>
    </svg>
  );
}
