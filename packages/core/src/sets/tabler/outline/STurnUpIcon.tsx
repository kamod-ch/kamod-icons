import type { IconProps } from "../../../shared/types";

export function STurnUpIcon({
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
      <path d="M7 19a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/><path d="M5 17V7.5a3.5 3.5 0 0 1 7 0v9a3.5 3.5 0 0 0 7 0V3"/><path d="m16 6 3-3 3 3"/>
    </svg>
  );
}
