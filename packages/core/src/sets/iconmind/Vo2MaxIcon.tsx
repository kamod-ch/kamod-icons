import type { IconProps } from "../../shared/types";

export function Vo2MaxIcon({
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
      <path d="M12 3v5m0 0c-4 0-7 3-7 7 0 3 1 5 4 5 2 0 3-1 3-4 0 3 1 4 3 4 3 0 4-2 4-5 0-4-3-7-7-7"/>
    </svg>
  );
}
