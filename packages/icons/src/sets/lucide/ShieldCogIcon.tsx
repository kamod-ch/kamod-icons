import type { IconProps } from "../../shared/types";

export function ShieldCogIcon({
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
      <path d="m10.929 14.467-.383.924m.383-6.468L10.546 8m2.679.923L13.608 8m-.001 7.391-.382-.924m1.624-3.92.923-.383m-.923 2.679.923.383M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9.305 10.547l-.923-.383m.923 2.679-.923.383"/><circle cx="12.077" cy="11.695" r="3"/>
    </svg>
  );
}
