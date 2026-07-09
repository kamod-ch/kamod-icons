import type { IconProps } from "../../../shared/types";

export function PaintbrushIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m9.275 12.059 8.77-8.771a2.12 2.12 0 0 1 3 0h0a2.12 2.12 0 0 1 0 3l-8.77 8.77"/><path d="M2.333 19.608c3.604 1.083 6.528 1.173 8.919-1.273 1.441-1.447 1.441-3.794 0-5.242s-3.768-1.469-5.221 0c-2.364 2.39-.3 4.659-3.698 6.515"/></g>
    </svg>
  );
}
