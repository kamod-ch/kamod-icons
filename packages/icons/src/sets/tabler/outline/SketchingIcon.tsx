import type { IconProps } from "../../../shared/types";

export function SketchingIcon({
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
      <path d="M4 15c2-4.97 7.356-11 9-11 4.25 0-5.5 11.958-3 13s5.65-6.678 7.4-5.902c1.75.777-1.05 7.589-.3 8.63S20.25 18.831 21 17"/>
    </svg>
  );
}
