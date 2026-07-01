import type { IconProps } from "../../shared/types";

export function CloudAlertIcon({
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
      <path d="M12 12v4m0 4h.01m-3.882-3.051A7 7 0 1 1 15.71 8h1.79a1 1 0 0 1 0 9h-1.642"/>
    </svg>
  );
}
