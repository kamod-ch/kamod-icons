import type { IconProps } from "../../../shared/types";

export function Filter2CancelIcon({
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
      <path d="M4 6h16M6 12h12m-9 6h3m5 3 4-4m-5 2a3 3 0 1 0 6.001 0A3 3 0 0 0 16 19l1 2"/>
    </svg>
  );
}
