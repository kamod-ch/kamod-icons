import type { IconProps } from "../../../shared/types";

export function BaselineIcon({
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
      <path d="M4 20h16M8 16V8a4 4 0 1 1 8 0v8m-8-6h8"/>
    </svg>
  );
}
