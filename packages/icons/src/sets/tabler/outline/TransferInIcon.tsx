import type { IconProps } from "../../../shared/types";

export function TransferInIcon({
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
      <path d="M4 18v3h16V7l-8-4-8 4v3m0 4h9"/><path d="m10 11 3 3-3 3"/>
    </svg>
  );
}
