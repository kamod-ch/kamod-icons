import type { IconProps } from "../../../shared/types";

export function CapProjectingIcon({
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
      <path d="M20 6H7a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h13"/><path d="M13 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h7"/>
    </svg>
  );
}
