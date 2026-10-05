import type { IconProps } from "../../shared/types";

export function LungsIcon({
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
      <path d="M12 3v7m0 0-3 3m3-3 3 3m-6 0v7a5 5 0 0 1-5-5c0-2 2-2 5-2m6 0v7a5 5 0 0 0 5-5c0-2-2-2-5-2"/>
    </svg>
  );
}
