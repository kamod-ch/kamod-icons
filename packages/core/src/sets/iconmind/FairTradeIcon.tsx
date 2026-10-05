import type { IconProps } from "../../shared/types";

export function FairTradeIcon({
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
      <path d="M12 4v16M4 6h16M9 6a3 3 0 0 1-6 0m18 0a3 3 0 0 1-6 0M8 20h8"/>
    </svg>
  );
}
