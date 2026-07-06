import type { IconProps } from "../../../shared/types";

export function ClubsIcon({
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
      <path d="M12 3a4 4 0 0 1 3.164 6.447A4 4 0 1 1 14 15.645V17l1 4H9l1-4v-1.355a4 4 0 1 1-1.164-6.199A4 4 0 0 1 11.999 3"/>
    </svg>
  );
}
