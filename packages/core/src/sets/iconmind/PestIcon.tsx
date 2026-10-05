import type { IconProps } from "../../shared/types";

export function PestIcon({
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
      <path d="M12 6c3 0 5 3 5 7s-2 7-5 7-5-3-5-7 2-7 5-7m-5 4L4 7m13 3 3-3M7 16l-3 3m13-3 3 3"/>
    </svg>
  );
}
