import type { IconProps } from "../../shared/types";

export function GuestListIcon({
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
      <path d="M4 5v16h16V5Zm5 0V2h6v3m-8 5h10M7 14h10M7 18h6"/>
    </svg>
  );
}
