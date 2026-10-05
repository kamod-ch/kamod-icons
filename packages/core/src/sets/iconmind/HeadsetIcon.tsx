import type { IconProps } from "../../shared/types";

export function HeadsetIcon({
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
      <path d="M4 11a8 8 0 0 1 16 0M3 13a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2Zm14 0a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2Zm4 5v3h-6m-3.5 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
