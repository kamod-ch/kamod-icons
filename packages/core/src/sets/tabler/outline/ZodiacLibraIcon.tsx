import type { IconProps } from "../../../shared/types";

export function ZodiacLibraIcon({
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
      <path d="M5 20h14M5 17h5v-.3a7 7 0 1 1 4 0v.3h5"/>
    </svg>
  );
}
