import type { IconProps } from "../../../shared/types";

export function MapsTurnBackIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4.365 19.787 7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M5.5 11V6v0s0-3.5 3-3.5C12 2.5 12 6 12 6v4.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 7.5 5.5 11 2 7.5"/>
    </svg>
  );
}
