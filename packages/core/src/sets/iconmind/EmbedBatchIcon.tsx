import type { IconProps } from "../../shared/types";

export function EmbedBatchIcon({
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
      <path d="M7.5 5 10 7.5l-4 4-4-4L4.5 5m15 0L22 7.5l-4 4-4-4L16.5 5M3 15v4h18v-4"/>
    </svg>
  );
}
