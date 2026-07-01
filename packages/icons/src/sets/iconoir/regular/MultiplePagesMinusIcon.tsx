import type { IconProps } from "../../../shared/types";

export function MultiplePagesMinusIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 2h9.5L21 6.5V19"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 22h5.5a1.5 1.5 0 0 0 1.5-1.5V8.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 14.25 5H4.5A1.5 1.5 0 0 0 3 6.5V13m-1.008 6h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 5v3.4a.6.6 0 0 0 .6.6H18"/>
    </svg>
  );
}
