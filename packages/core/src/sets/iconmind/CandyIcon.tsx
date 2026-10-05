import type { IconProps } from "../../shared/types";

export function CandyIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/><path d="M8.5 9.5 5 6v12l3.5-3.5m7-5L19 6v12l-3.5-3.5"/>
    </svg>
  );
}
