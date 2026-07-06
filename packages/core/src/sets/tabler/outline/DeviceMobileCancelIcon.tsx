import type { IconProps } from "../../../shared/types";

export function DeviceMobileCancelIcon({
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
      <path d="M12 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7m-2 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4M11 4h2m-1 13v.01"/>
    </svg>
  );
}
