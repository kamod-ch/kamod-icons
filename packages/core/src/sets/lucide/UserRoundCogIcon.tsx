import type { IconProps } from "../../shared/types";

export function UserRoundCogIcon({
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
      <path d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472.924-.383m-.924 2.679.924.383"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
