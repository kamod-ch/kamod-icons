import type { IconProps } from "../../../shared/types";

export function MathXyIcon({
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
      <path d="m14 9 3 5.063M4 9l6 6m-6 0 6-6m10 0-4.8 9"/>
    </svg>
  );
}
