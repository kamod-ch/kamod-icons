import type { IconProps } from "../../shared/types";

export function SunRiseIcon({
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
      <path d="M7 16a5 5 0 0 1 10 0M2 19h20M12 5v4M9.5 7.5 12 5l2.5 2.5"/>
    </svg>
  );
}
