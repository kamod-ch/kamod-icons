import type { IconProps } from "../../shared/types";

export function VenusIcon({
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
      <path d="M12 15v7m-3-3h6"/><circle cx="12" cy="9" r="6"/>
    </svg>
  );
}
