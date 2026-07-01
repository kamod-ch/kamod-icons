import type { IconProps } from "../../../shared/types";

export function ArrowRightDashedIcon({
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
      <path d="M5 12h.5m3 0H10m3 0h6m-6 6 6-6m-6-6 6 6"/>
    </svg>
  );
}
