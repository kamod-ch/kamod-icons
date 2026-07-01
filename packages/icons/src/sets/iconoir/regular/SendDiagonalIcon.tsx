import type { IconProps } from "../../../shared/types";

export function SendDiagonalIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M22.153 3.553 11.176 21.004l-1.67-8.596L2 7.898zM9.456 12.444l12.696-8.89"/>
    </svg>
  );
}
