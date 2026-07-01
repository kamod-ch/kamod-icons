import type { IconProps } from "../../../shared/types";

export function XboxBIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1 5h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3a3 3 0 0 0 2.235-5A3 3 0 0 0 13 7m0 6a1 1 0 0 1 1 1l-.007.117A1 1 0 0 1 13 15h-2v-2zm0-4a1 1 0 0 1 0 2h-2V9z"/>
    </svg>
  );
}
