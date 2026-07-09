import type { IconProps } from "../../../shared/types";

export function Toggle3Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M16 4.667H8a1 1 0 0 0-1 1v.101a6.3 6.3 0 0 1 1-.101 6.334 6.334 0 0 1 0 12.666c-.343 0-.672-.048-1-.101v.101a1 1 0 0 0 1 1h8c4.044 0 7.333-3.289 7.333-7.333S20.043 4.667 16 4.667Z"/><path d="M8 19.333C3.956 19.333.667 16.044.667 12S3.956 4.667 8 4.667 15.333 7.956 15.333 12 12.044 19.333 8 19.333ZM8 6.667c-2.941 0-5.333 2.392-5.333 5.333S5.059 17.333 8 17.333s5.333-2.392 5.333-5.333S10.941 6.667 8 6.667Z"/></g>
    </svg>
  );
}
