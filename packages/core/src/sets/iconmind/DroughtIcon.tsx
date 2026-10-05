import type { IconProps } from "../../shared/types";

export function DroughtIcon({
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
      <path d="M8 6a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-6 7h20M6 13l4 4-4 4m10-8-4 4 4 4"/>
    </svg>
  );
}
