import type { IconProps } from "../../../shared/types";

export function CongruentToIcon({
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
      <path d="M5 13h14M5 17h14M5 7.686c2.333-2.624 4.667-1.856 7 .064s4.667 2.688 7 .064"/>
    </svg>
  );
}
