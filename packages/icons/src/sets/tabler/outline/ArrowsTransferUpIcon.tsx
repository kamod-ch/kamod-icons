import type { IconProps } from "../../../shared/types";

export function ArrowsTransferUpIcon({
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
      <path d="M7 21v-6m13-9-3-3-3 3m3-3v18m-7-3-3 3-3-3M7 3v2m0 4v2"/>
    </svg>
  );
}
