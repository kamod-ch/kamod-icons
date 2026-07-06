import type { IconProps } from "../../../shared/types";

export function DetailsOffIcon({
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
      <path d="M5 19h14m1.986-2.016a2 2 0 0 0-.146-.734L13.74 4a2 2 0 0 0-3.5 0l-.821 1.417M7.95 7.951 3.14 16.25A2 2 0 0 0 4.89 19M12 3v5m0 4v7M3 3l18 18"/>
    </svg>
  );
}
