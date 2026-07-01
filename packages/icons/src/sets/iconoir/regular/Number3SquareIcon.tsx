import type { IconProps } from "../../../shared/types";

export function Number3SquareIcon({
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
      <path stroke="currentColor" d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.5 10c0-1.105 1.12-2 2.5-2s2.5.895 2.5 2-.62 2-2 2m-3 2c0 1.105 1.12 2 2.5 2s2.5-.895 2.5-2-.62-2-2-2"/>
    </svg>
  );
}
