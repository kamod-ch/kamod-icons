import type { IconProps } from "../../shared/types";

export function SecurityChampionIcon({
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
      <path d="M9 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 21a9 9 0 0 1 18 0"/><path d="M9 14h6v3l-3 3-3-3Z"/>
    </svg>
  );
}
