import type { IconProps } from "../../../shared/types";

export function NetworkLeftIcon({
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
      <rect x="2" y="21" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="rotate(-90 2 21)"/><rect x="17" y="15.5" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="rotate(-90 17 15.5)"/><rect x="2" y="10" stroke="currentColor" strokeWidth="1.5" rx=".6" transform="rotate(-90 2 10)"/><path stroke="currentColor" strokeWidth="1.5" d="M7 17.5h3.5a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H7m5.5 5.5H17"/>
    </svg>
  );
}
