import type { IconProps } from "../../shared/types";

export function McpCapabilityNegotiateIcon({
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
      <path d="M13.5 3H17a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6l3-3h3.5M7 18h5"/><path d="M15 18a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-7-7h8m-5.5-2.5L8 11l2.5 2.5m3-5L16 11l-2.5 2.5"/>
    </svg>
  );
}
