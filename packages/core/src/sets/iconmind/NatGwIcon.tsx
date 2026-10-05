import type { IconProps } from "../../shared/types";

export function NatGwIcon({
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
      <path d="M2 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-4a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2Zm9 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
