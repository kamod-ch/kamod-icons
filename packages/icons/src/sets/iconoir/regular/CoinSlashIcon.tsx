import type { IconProps } from "../../../shared/types";

export function CoinSlashIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4.623 5.248A9.96 9.96 0 0 0 2 12c0 5.523 4.477 10 10 10a9.96 9.96 0 0 0 6.615-2.5m2.687-3.822A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10-1.231 0-2.41.223-3.5.63"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 15c.644.86 1.843 1.35 3 1.391 1.114.04 2.19-.336 2.697-1.198M12 16.391V18.5m-2.5-9c0 1.181.852 1.665 1.886 2M15 8.5c-.685-.685-1.891-1.161-3-1.191V5.5M3 3l18 18"/>
    </svg>
  );
}
