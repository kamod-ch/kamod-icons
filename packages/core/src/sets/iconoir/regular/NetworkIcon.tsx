import type { IconProps } from "../../../shared/types";

export function NetworkIcon({
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
      <rect x="3" y="2" stroke="currentColor" strokeWidth="1.5" rx=".6"/><rect x="8.5" y="17" stroke="currentColor" strokeWidth="1.5" rx=".6"/><rect x="14" y="2" stroke="currentColor" strokeWidth="1.5" rx=".6"/><path stroke="currentColor" strokeWidth="1.5" d="M6.5 7v3.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7M12 12.5V17"/>
    </svg>
  );
}
