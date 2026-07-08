import type { IconProps } from "../../../shared/types";

export function Magicpen2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3s-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3M18.01 8.99l-3-3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2zm-4 6L6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8zm15 5L21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13z"/>
    </svg>
  );
}
