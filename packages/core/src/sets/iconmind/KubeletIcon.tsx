import type { IconProps } from "../../shared/types";

export function KubeletIcon({
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
      <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-6 0h6m8 0h6"/><path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
