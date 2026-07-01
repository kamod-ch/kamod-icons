import type { IconProps } from "../../shared/types";

export function MarsIcon({
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
      <path d="M16 3h5v5m0-5-6.75 6.75"/><circle cx="10" cy="14" r="6"/>
    </svg>
  );
}
