import type { IconProps } from "../../../shared/types";

export function LaptopMobileIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M19.667 9.333h-3.334a3 3 0 0 0-3 3v7.334a3 3 0 0 0 3 3h3.334a3 3 0 0 0 3-3v-7.334a3 3 0 0 0-3-3Z"/><path fillRule="evenodd" d="M6.333 2.667a3.666 3.666 0 0 0-3.666 3.666v8.834c0 .536.12 1.045.336 1.5h-.67a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H6.167a1.5 1.5 0 0 1-1.5-1.5V6.333c0-.92.745-1.666 1.666-1.666h11.334c.92 0 1.666.745 1.666 1.666a1 1 0 0 0 2 0 3.666 3.666 0 0 0-3.666-3.666z" clipRule="evenodd"/></g>
    </svg>
  );
}
