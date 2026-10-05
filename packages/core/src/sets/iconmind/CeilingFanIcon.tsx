import type { IconProps } from "../../shared/types";

export function CeilingFanIcon({
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
      <path d="M12 2v5m-2 2a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 0C6 7 4 6 3 6v6c2-1 5-2 7-3m4 0c4-2 6-3 7-3v6c-2-1-5-2-7-3"/><path d="M12 11c-1 4-2 6-2 7h5c-1-3-2-6-3-7"/>
    </svg>
  );
}
