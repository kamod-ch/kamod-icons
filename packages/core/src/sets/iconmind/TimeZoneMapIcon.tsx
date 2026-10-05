import type { IconProps } from "../../shared/types";

export function TimeZoneMapIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v18"/><path d="M12 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0m4-3v3m0 0h2.5"/>
    </svg>
  );
}
