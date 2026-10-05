import type { IconProps } from "../../shared/types";

export function TransitGatewayIcon({
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
      <path d="m12 8.5 3.5 3.5-3.5 3.5L8.5 12ZM3 12h4m10 0h4m-9-9v4m0 10v4"/>
    </svg>
  );
}
