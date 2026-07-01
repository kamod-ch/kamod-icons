import type { IconProps } from "../../../shared/types";

export function Filter2PinIcon({
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
      <path d="M4 6h16M6 12h10m-7 6h3m7 0v.01m2.121 2.111a3.005 3.005 0 0 0-.454-4.616 3 3 0 0 0-3.334 0 3 3 0 0 0-.454 4.616Q17.506 20.749 19 22q1.577-1.335 2.121-1.879L19 18"/>
    </svg>
  );
}
