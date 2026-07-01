import type { IconProps } from "../../../shared/types";

export function ZeppelinIcon({
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
      <path d="M13.5 4c4.694 0 8.5 2.686 8.5 6s-3.806 6-8.5 6q-3.194 0-7.364-2.777L4 15v-3.33A46 46 0 0 1 2 10a46 46 0 0 1 2-1.67V5l2.135 1.778Q10.305 4 13.5 4"/><path d="M10 15.5V20h6v-4"/>
    </svg>
  );
}
