import type { IconProps } from "../../shared/types";

export function Columns3CogIcon({
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
      <path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5m-6.7 9.1 1-.4M15 3v7.5m.2 6.4-.9-.3m2.3 5.1.3-.9m-.1-5.5-.4-1m2.7.9.3-.9m.2 7.4-.4-1m1.5-3.9 1-.4m0 3-.9-.3M9 3v18"/><circle cx="18" cy="18" r="3"/>
    </svg>
  );
}
