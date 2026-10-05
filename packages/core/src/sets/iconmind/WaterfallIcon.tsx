import type { IconProps } from "../../shared/types";

export function WaterfallIcon({
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
      <path d="M2 5h20M7 5v12m5-12v12m5-12v12M3 21l3-3 3 3 3-3 3 3 3-3 3 3"/>
    </svg>
  );
}
