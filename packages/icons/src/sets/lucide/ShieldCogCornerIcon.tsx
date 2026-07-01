import type { IconProps } from "../../shared/types";

export function ShieldCogCornerIcon({
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
      <path d="M11 22c-3.806-1.45-7-3.966-7-9V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v4m-5.077 6.547L14 16.164m.923 2.679-.923.383m2.547-4.303L16.164 14m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.923-.383m-.923 2.679.923.383"/><circle cx="17.695" cy="17.695" r="3"/>
    </svg>
  );
}
