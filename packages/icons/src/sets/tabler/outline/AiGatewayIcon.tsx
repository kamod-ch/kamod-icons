import type { IconProps } from "../../../shared/types";

export function AiGatewayIcon({
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
      <path d="M4 6.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m11 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m0 11a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m-11 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0m4.5-2 7-7"/>
    </svg>
  );
}
