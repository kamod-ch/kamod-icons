import type { IconProps } from "../../../shared/types";

export function Layers3Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3.553 6.781 11.38 2.66a1.33 1.33 0 0 1 1.242 0l7.827 4.121a1 1 0 0 1 0 1.77l-7.827 4.121a1.33 1.33 0 0 1-1.242 0l-7.826-4.12a1 1 0 0 1 0-1.77Z"/><path d="M20.981 12a.99.99 0 0 1-.534.885l-7.827 4.122a1.33 1.33 0 0 1-1.243 0l-7.826-4.122A.99.99 0 0 1 3.016 12"/><path d="M20.981 16.333a.99.99 0 0 1-.534.886l-7.827 4.12a1.33 1.33 0 0 1-1.243 0l-7.826-4.12a.99.99 0 0 1-.535-.886"/></g>
    </svg>
  );
}
