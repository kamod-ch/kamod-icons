import type { IconProps } from "../../shared/types";

export function ForwardProxyIcon({
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
      <path d="M2 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m0 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 6l6 6-6 6m6-6h5m0-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}
