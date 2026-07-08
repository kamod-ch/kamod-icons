import type { IconProps } from "../../../shared/types";

export function TextHighlightIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M19 21.333H8.727a1 1 0 0 1 0-2H19a1 1 0 0 1 0 2Z"/><path d="M16.99 2.848 14.916 1.8a3.675 3.675 0 0 0-4.682 1.208l-5.022 7.363a2.31 2.31 0 0 0 .09 2.744c.927 2.332.046 4.3-.142 4.67v.003l-1.051 2.096c-.156.31-.139.679.041.973.183.295.506.475.852.475h3.727a1 1 0 0 0 .892-.55l.301-.594c.188-.372 1.247-2.25 3.678-2.89.018 0 .036.007.054.007a2.335 2.335 0 0 0 2.203-1.563l2.944-8.41a3.68 3.68 0 0 0-1.808-4.485ZM8.657 18.431l-1.332-.674a7.9 7.9 0 0 0 .361-3.182l3.318 1.674a7.9 7.9 0 0 0-2.347 2.182Z"/></g>
    </svg>
  );
}
