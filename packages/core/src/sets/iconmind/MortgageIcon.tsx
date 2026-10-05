import type { IconProps } from "../../shared/types";

export function MortgageIcon({
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
      <path d="m3 11 9-9 9 9M6 11v10h12V11"/><path d="M9 13.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m.5 4 5-5m-1.5 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
