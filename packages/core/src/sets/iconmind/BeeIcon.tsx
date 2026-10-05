import type { IconProps } from "../../shared/types";

export function BeeIcon({
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
      <path d="M8 9a4 4 0 0 1 8 0v8a4 4 0 0 1-8 0Zm.5 3h7M9 16h6m-7-6c-3-4-6-1-5 2s4 2 5-2m8 0c3-4 6-1 5 2s-4 2-5-2"/>
    </svg>
  );
}
