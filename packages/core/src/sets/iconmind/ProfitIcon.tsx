import type { IconProps } from "../../shared/types";

export function ProfitIcon({
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
      <path d="M9.5 4h5v2.5L18 10a7 7 0 1 1-12 0l3.5-3.5Zm2.5 8v6m-3-3h6"/>
    </svg>
  );
}
