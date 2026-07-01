import type { IconProps } from "../../shared/types";

export function ListMusicIcon({
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
      <path d="M16 5H3m8 7H3m8 7H3m18-3V5"/><circle cx="18" cy="16" r="3"/>
    </svg>
  );
}
