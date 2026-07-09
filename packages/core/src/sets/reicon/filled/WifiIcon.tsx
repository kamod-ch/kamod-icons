import type { IconProps } from "../../../shared/types";

export function WifiIcon({
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
      <path fill="currentColor" d="M1.714 9.2C4.314 6.546 7.95 5 12 5s7.685 1.546 10.286 4.2a1 1 0 1 0 1.428-1.4C20.724 4.75 16.57 3 12 3S3.275 4.75.286 7.8a1 1 0 0 0 1.428 1.4Z"/><path fill="currentColor" d="M5.187 12.725a9.876 9.876 0 0 1 13.626.001 1 1 0 1 0 1.374-1.452 11.876 11.876 0 0 0-16.374-.002 1 1 0 0 0 1.374 1.453Z"/><path fill="currentColor" d="M8.933 16.23C9.756 15.46 10.776 15 12 15c1.223 0 2.244.46 3.066 1.23a1 1 0 0 0 1.367-1.46C15.276 13.685 13.776 13 12 13s-3.275.685-4.433 1.77a1 1 0 0 0 1.366 1.46ZM12 17.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Z"/>
    </svg>
  );
}
