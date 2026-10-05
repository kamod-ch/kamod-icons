import type { IconProps } from "../../shared/types";

export function GitBranchRemoveIcon({
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
      <path d="M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2.5v7M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-6h7.5m.5 0a2 2 0 1 0 4 0 2 2 0 1 0-4 0m1.5-5.5h5"/>
    </svg>
  );
}
