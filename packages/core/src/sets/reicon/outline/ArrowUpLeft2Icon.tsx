import type { IconProps } from "../../../shared/types";

export function ArrowUpLeft2Icon({
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
      <path fill="currentColor" d="M5 4.25a.75.75 0 0 0-.75.75v8a.75.75 0 0 0 1.5 0V6.81l12.72 12.72a.75.75 0 1 0 1.06-1.06L6.81 5.75H13a.75.75 0 0 0 0-1.5z"/>
    </svg>
  );
}
