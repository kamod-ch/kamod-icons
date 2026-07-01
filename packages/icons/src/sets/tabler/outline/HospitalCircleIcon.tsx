import type { IconProps } from "../../../shared/types";

export function HospitalCircleIcon({
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
      <path d="M10 16V8m-7 4a9 9 0 1 0 18 0 9 9 0 0 0-18 0m11 4V8m-4 4h4"/>
    </svg>
  );
}
