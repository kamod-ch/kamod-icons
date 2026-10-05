import type { IconProps } from "../../shared/types";

export function WristbandIcon({
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
      <path d="M14 6c4 1 7 3 7 6 0 4-4 6-9 6s-9-2-9-6c0-3 3-5 7-6"/><path d="M10 3h4v5h-4Z"/>
    </svg>
  );
}
