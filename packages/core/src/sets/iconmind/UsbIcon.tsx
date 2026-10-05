import type { IconProps } from "../../shared/types";

export function UsbIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 3v17m-2 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-8 4.5-4.5m-1-1a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 15l-4.5-4.5M3 7.5h4.5V12H3Z"/>
    </svg>
  );
}
