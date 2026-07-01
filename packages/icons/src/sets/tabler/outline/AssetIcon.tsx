import type { IconProps } from "../../../shared/types";

export function AssetIcon({
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
      <path d="M3 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2.782 12.975 6.619-12.174M6.079 9.756l12.217-6.631"/><path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
