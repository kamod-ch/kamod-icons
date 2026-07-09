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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="M18.333 8.025a1 1 0 0 1-1-1V3.667a1 1 0 0 1 2 0v3.358a1 1 0 0 1-1 1Z"/><path fillRule="evenodd" d="M21.056 7.797 12.595 1.53a1 1 0 0 0-1.191 0l-8.46 6.268A2.34 2.34 0 0 0 2 9.672v8.661A3.67 3.67 0 0 0 5.667 22h1.666v-5A2.333 2.333 0 1 1 12 17v5h6.333A3.67 3.67 0 0 0 22 18.333V9.672c0-.736-.353-1.437-.944-1.875ZM15 14h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z" clipRule="evenodd"/></g>
    </svg>
  );
}
