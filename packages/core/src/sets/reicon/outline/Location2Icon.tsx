import type { IconProps } from "../../../shared/types";

export function Location2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><circle cx="9" cy="5" r="3.25"/><path d="M9 13.25v-5m3 4.179c2.507.315 4.25 1.012 4.25 1.821 0 1.105-3.246 2-7.25 2s-7.25-.895-7.25-2c0-.809 1.743-1.507 4.25-1.821"/></g>
    </svg>
  );
}
