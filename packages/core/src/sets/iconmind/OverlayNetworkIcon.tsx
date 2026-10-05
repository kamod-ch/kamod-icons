import type { IconProps } from "../../shared/types";

export function OverlayNetworkIcon({
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
      <path d="M2 17h20M5 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 12l6-6 6 6"/><path d="M5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
