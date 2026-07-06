import type { IconProps } from "../../../shared/types";

export function Number9SquareIcon({
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
      <path stroke="currentColor" d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.38 0 2.5.5 2.5 2.5 0 1.5-1.12 2-2.5 2s-2.5-.5-2.5-2c0-2 1.12-2.5 2.5-2.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.5 11c0 3 0 5-4.5 5"/>
    </svg>
  );
}
