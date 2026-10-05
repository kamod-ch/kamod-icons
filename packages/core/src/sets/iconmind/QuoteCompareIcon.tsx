import type { IconProps } from "../../shared/types";

export function QuoteCompareIcon({
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
      <path d="M3 7h7v6l-3.5 3.5L3 13Zm11 0h7v6l-3.5 3.5L14 13Z"/>
    </svg>
  );
}
