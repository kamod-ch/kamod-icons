import type { IconProps } from "../../shared/types";

export function ZodiacVirgoIcon({
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
      <path d="M11 5.5a1 1 0 0 1 5 0V16a5 5 0 0 0 5 5"/><path d="M16 11.5a1 1 0 0 1 5 0V16a5 5 0 0 1-5 5M6 19V6a3 3 0 0 0-3-3h0m3 2.5a1 1 0 0 1 5 0V19"/>
    </svg>
  );
}
