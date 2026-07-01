import type { IconProps } from "../../shared/types";

export function UserCogIcon({
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
      <path d="M10 15H6a4 4 0 0 0-4 4v2m12.305-4.47.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.624-3.92.924-.383m-.924 2.679.924.383"/><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/>
    </svg>
  );
}
