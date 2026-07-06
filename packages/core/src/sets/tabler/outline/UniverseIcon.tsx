import type { IconProps } from "../../../shared/types";

export function UniverseIcon({
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
      <path d="M7.027 11.477a5 5 0 1 0 5.496-4.45 4.95 4.95 0 0 0-3.088.681"/><path d="M5.636 5.636a9 9 0 1 0 3.555-2.188"/><path d="M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-6 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-3 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
