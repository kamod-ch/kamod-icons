import type { IconProps } from "../../../shared/types";

export function Wifi1Icon({
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
      <path d="M12 18h.01m-2.838-2.828a4 4 0 0 1 5.656 0"/>
    </svg>
  );
}
