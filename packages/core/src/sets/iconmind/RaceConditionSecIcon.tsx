import type { IconProps } from "../../shared/types";

export function RaceConditionSecIcon({
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
      <path d="M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8l4-4h3.5M5 9.5h10"/><path d="M12.5 7 15 9.5 12.5 12M5 14.5h7M9.5 12l2.5 2.5L9.5 17"/>
    </svg>
  );
}
