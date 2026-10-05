import type { IconProps } from "../../shared/types";

export function DeepfakeDetectIcon({
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
      <path d="M3 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2.5 7.5a4 4 0 1 0 8 0 4 4 0 1 0-8 0m7 3 2 2"/>
    </svg>
  );
}
