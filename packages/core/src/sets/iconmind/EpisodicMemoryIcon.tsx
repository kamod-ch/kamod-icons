import type { IconProps } from "../../shared/types";

export function EpisodicMemoryIcon({
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
      <path d="M2 6h6m-6 5h6m-6 5h6m3-5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0"/><path d="M16.5 8.5V11H19"/>
    </svg>
  );
}
