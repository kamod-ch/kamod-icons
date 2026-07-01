import type { IconProps } from "../../../shared/types";

export function DirectionsOffIcon({
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
      <path d="M12 21v-4m0-4v-1m0-7V3m-2 18h4M8 8v1h1m4 0h6l2-2-2-2H9m5 9v3H6l-2-2 2-2h7M3 3l18 18"/>
    </svg>
  );
}
