import type { IconProps } from "../../shared/types";

export function UnfoldHorizontalIcon({
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
      <path d="M16 12h6M8 12H2M12 2v2m0 4v2m0 4v2m0 4v2m7-7 3-3-3-3M5 9l-3 3 3 3"/>
    </svg>
  );
}
