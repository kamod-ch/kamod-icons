import type { IconProps } from "../../../shared/types";

export function ContractIcon({
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
      <path d="M8 21H6a3 3 0 0 1-3-3v-1h5.5M17 8.5V5a2 2 0 1 1 2 2h-2"/><path d="M19 3H8a3 3 0 0 0-3 3v11M9 7h4m-4 4h4m5.42 1.61a2.1 2.1 0 0 1 2.97 2.97L15 22h-3v-3z"/>
    </svg>
  );
}
