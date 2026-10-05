import type { IconProps } from "../../shared/types";

export function AlertIcon({
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
      <path d="M5 15a7 7 0 0 1 14 0M5 15h14M12 4v4m-1 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
