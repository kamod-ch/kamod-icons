import type { IconProps } from "../../shared/types";

export function OrderHistoryIcon({
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
      <path d="M3 5.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3.5 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0m9 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/><path d="M9 10.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-3v3m0 0h2.5"/>
    </svg>
  );
}
