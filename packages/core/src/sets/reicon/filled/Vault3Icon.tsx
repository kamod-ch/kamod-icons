import type { IconProps } from "../../../shared/types";

export function Vault3Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M6.333 23.333a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Zm11.334 0a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Z"/><path d="M17.667 2.667H6.333a3.67 3.67 0 0 0-3.666 3.666v.334h-.334a1 1 0 0 0 0 2h.334V11h-.334a1 1 0 0 0 0 2h.334v2.333h-.334a1 1 0 0 0 0 2h.334v.334a3.67 3.67 0 0 0 3.666 3.666h11.334a3.67 3.67 0 0 0 3.666-3.666V6.333a3.67 3.67 0 0 0-3.666-3.666ZM13 13.135v2.198a1 1 0 0 1-2 0v-2.198a2.67 2.67 0 0 1-1.667-2.468C9.333 9.196 10.53 8 12 8s2.667 1.196 2.667 2.667A2.67 2.67 0 0 1 13 13.135Z"/></g>
    </svg>
  );
}
