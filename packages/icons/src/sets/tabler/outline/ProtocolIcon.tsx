import type { IconProps } from "../../../shared/types";

export function ProtocolIcon({
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
      <path d="M15 6 8 18M20 6l-7 12m-8-4v.015m0-4v.015"/>
    </svg>
  );
}
