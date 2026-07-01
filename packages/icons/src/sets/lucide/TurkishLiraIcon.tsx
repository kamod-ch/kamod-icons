import type { IconProps } from "../../shared/types";

export function TurkishLiraIcon({
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
      <path d="M15 4 5 9m10-.5-10 5M18 12a9 9 0 0 1-9 9V3"/>
    </svg>
  );
}
