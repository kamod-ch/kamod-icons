import type { IconProps } from "../../shared/types";

export function DonationBoxIcon({
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
      <path d="M4 9v11h16V9M2 9h20M9 6h6"/><path d="M12 16c-2-1.5-4-3-3-4.5.7-1 2-.5 3 .5 1-1 2.3-1.5 3-.5 1 1.5-1 3-3 4.5"/>
    </svg>
  );
}
