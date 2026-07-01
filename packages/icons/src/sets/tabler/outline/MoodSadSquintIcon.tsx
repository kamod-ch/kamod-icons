import type { IconProps } from "../../../shared/types";

export function MoodSadSquintIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M14.5 16.05a3.5 3.5 0 0 0-5 0m-1-4.55L10 10 8.5 8.5m7 3L14 10l1.5-1.5"/>
    </svg>
  );
}
