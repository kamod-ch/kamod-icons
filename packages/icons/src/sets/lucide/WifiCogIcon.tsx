import type { IconProps } from "../../shared/types";

export function WifiCogIcon({
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
      <path d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 7.82a15 15 0 0 1 20 0m-1.228 9.032.924-.383m-.924 2.679.924.383M5 11.858a10 10 0 0 1 11.5-1.785m-8 5.356a5 5 0 0 1 2.413-1.31"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
