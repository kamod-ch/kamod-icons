import type { IconProps } from "../../../shared/types";

export function NetworkReverseIcon({
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
      <rect fill="currentColor" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(1 0 0 -1 3 22)"/><rect fill="currentColor" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(1 0 0 -1 8.5 7)"/><rect fill="currentColor" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(1 0 0 -1 14 22)"/><path stroke="currentColor" strokeWidth="1.5" d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7"/>
    </svg>
  );
}
