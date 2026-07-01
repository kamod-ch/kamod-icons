import type { IconProps } from "../../../shared/types";

export function BowIcon({
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
      <path d="M17 3h4v4m0-4L6 18m-3 0h3v3m10.5-1c1.576-1.576 2.5-4.095 2.5-6.5C19 8.69 15.31 5 10.5 5 8.085 5 5.578 5.913 4 7.5z"/>
    </svg>
  );
}
