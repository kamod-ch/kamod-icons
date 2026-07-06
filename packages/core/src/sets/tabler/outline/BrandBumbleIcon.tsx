import type { IconProps } from "../../../shared/types";

export function BrandBumbleIcon({
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
      <path d="M7 12h10M9 8h6m-5 8h4m2.268-13H7.732a1.46 1.46 0 0 0-1.268.748l-4.268 7.509a1.51 1.51 0 0 0 0 1.486l4.268 7.509c.26.462.744.747 1.268.748h8.536a1.46 1.46 0 0 0 1.268-.748l4.268-7.509a1.51 1.51 0 0 0 0-1.486l-4.268-7.509A1.46 1.46 0 0 0 16.268 3"/>
    </svg>
  );
}
