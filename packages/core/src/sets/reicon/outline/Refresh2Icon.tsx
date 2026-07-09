import type { IconProps } from "../../../shared/types";

export function Refresh2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m11.333 17 3 3-3 3"/><path d="M6.207 6.007A8.3 8.3 0 0 0 3.667 12a8.335 8.335 0 0 0 10.626 8.013M12.667 7l-3-3 3-3"/><path d="M17.792 17.992a8.335 8.335 0 0 0-8.02-14.024"/></g>
    </svg>
  );
}
