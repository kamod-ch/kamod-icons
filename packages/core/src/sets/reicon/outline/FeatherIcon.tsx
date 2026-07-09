import type { IconProps } from "../../../shared/types";

export function FeatherIcon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M17.299 11.641c-.604 4.7-4.583 5.425-8.715 4.79"/><path d="M3.667 20.333S5.416 4.972 20.333 3.667c-.746 1.301-.764 3.473-1.261 5.652C18.373 12 15.959 12.333 13 12.333"/></g>
    </svg>
  );
}
