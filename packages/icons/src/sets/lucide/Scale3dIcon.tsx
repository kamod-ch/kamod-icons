import type { IconProps } from "../../shared/types";

export function Scale3dIcon({
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
      <path d="M5 7v11a1 1 0 0 0 1 1h11m-11.707-.293L11 13"/><circle cx="19" cy="19" r="2"/><circle cx="5" cy="5" r="2"/>
    </svg>
  );
}
