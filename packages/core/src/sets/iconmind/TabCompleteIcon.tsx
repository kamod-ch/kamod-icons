import type { IconProps } from "../../shared/types";

export function TabCompleteIcon({
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
      <path d="M3 6h18M3 11h18M3 16h9m3 0h4m-2.5-2.5L19 16l-2.5 2.5m5.5-5v5"/>
    </svg>
  );
}
