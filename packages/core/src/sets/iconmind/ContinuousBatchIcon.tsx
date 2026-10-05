import type { IconProps } from "../../shared/types";

export function ContinuousBatchIcon({
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
      <path d="M4 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 2a1 1 0 1 0 2 0 1 1 0 1 0-2 0m2 4h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3l3-3h5"/><path d="M5 16.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
