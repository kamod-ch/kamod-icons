import type { IconProps } from "../../../shared/types";

export function BrandShopeeIcon({
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
      <path d="m4 7 .867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7zm4.5 0c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4"/><path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2-1-1.5-2.5-2-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1"/>
    </svg>
  );
}
