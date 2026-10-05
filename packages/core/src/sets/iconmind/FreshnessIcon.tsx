import type { IconProps } from "../../shared/types";

export function FreshnessIcon({
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
      <path d="M12 9v7m0-7L7 4m5 5 5-5M5 18.5A2.5 2.5 0 0 1 7.5 16h9a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 18.5"/>
    </svg>
  );
}
