import type { IconProps } from "../../../shared/types";

export function TrafficConeIcon({
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
      <path d="M4 20h16M9.4 10h5.2m-6.8 5h8.4M6 20l5-15h2l5 15"/>
    </svg>
  );
}
