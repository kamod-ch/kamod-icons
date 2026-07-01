import type { IconProps } from "../../../shared/types";

export function ArrowsTransferUpDownIcon({
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
      <path d="M7 21v-6m13-9-3-3-3 3m-4 12-3 3-3-3M7 3v2m0 4v2m10-8v6m0 12v-2m0-4v-2"/>
    </svg>
  );
}
