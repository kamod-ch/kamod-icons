import type { IconProps } from "../../shared/types";

export function RenewableEnergyIcon({
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
      <path d="M4 20c0-9.6 6.4-16 16-16 0 9.6-6.4 16-16 16"/><path d="m13 8-3.5 3.5h3L9 15"/>
    </svg>
  );
}
