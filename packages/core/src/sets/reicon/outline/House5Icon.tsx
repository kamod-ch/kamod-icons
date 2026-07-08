import type { IconProps } from "../../../shared/types";

export function House5Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18.333 3.667v3.358M7.667 21v-6a2 2 0 0 1 4 0v6M15 13h2"/><path d="M3.54 8.6 12 2.333 20.46 8.6c.34.252.54.65.54 1.072v8.661A2.666 2.666 0 0 1 18.333 21H5.667A2.666 2.666 0 0 1 3 18.333V9.672c0-.423.2-.82.54-1.072"/></g>
    </svg>
  );
}
