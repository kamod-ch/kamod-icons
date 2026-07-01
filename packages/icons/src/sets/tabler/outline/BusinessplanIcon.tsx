import type { IconProps } from "../../../shared/types";

export function BusinessplanIcon({
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
      <path d="M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0"/><path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6"/><path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4"/><path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3m2 0v1m0-8v1"/>
    </svg>
  );
}
