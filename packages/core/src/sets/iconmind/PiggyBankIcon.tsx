import type { IconProps } from "../../shared/types";

export function PiggyBankIcon({
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
      <path d="M4 12.5a7 7 0 1 1 14 0 7 7 0 1 1-14 0m12-2h5v4h-5M7.5 19v3m7-3v3m-5-19v2.5m6 2.5 2-2 2 2"/>
    </svg>
  );
}
