import type { IconProps } from "../../../shared/types";

export function GamingButtonsIcon({
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
      <g fill="currentColor" transform="scale(1.33333)"><rect x="2" y="2" rx="1.75" ry="1.75"/><circle cx="13" cy="13" r="3.25"/><path d="M7.78 10.22a.75.75 0 0 0-1.061 0l-1.72 1.72-1.72-1.72a.75.75 0 1 0-1.061 1.061l1.72 1.72-1.72 1.72a.75.75 0 0 0 1.06 1.061l1.72-1.72 1.72 1.72a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.061l-1.72-1.72 1.72-1.72a.75.75 0 0 0 0-1.061Zm8.568-4.095-2.266-3.924c-.451-.782-1.713-.783-2.164 0L9.653 6.124a1.23 1.23 0 0 0-.002 1.25c.223.386.638.626 1.083.626h4.531c.445 0 .86-.24 1.083-.626a1.24 1.24 0 0 0 0-1.249Z"/></g>
    </svg>
  );
}
