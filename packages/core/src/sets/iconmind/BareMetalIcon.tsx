import type { IconProps } from "../../shared/types";

export function BareMetalIcon({
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
      <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M6 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0M6 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0m10 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
