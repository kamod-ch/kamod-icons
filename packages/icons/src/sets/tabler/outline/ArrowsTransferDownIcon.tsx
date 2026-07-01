import type { IconProps } from "../../../shared/types";

export function ArrowsTransferDownIcon({
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
      <path d="M17 3v6m-7 9-3 3-3-3m3 3V3m13 3-3-3-3 3m3 15v-2m0-4v-2"/>
    </svg>
  );
}
