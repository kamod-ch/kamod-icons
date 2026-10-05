import type { IconProps } from "../../shared/types";

export function SavedGoalIcon({
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
      <path d="M5.5 3v5.5a6.5 6.5 0 0 0 13 0V3M12 15v5.5m-3.5 0h7"/><path d="M10 6h4v6l-2-2-2 2Z"/>
    </svg>
  );
}
