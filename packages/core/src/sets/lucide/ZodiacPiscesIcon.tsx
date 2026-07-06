import type { IconProps } from "../../shared/types";

export function ZodiacPiscesIcon({
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
      <path d="M19 21a15 15 0 0 1 0-18m1 9H4m1-9a15 15 0 0 1 0 18"/>
    </svg>
  );
}
