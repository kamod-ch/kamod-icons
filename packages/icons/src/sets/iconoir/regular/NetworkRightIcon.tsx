import type { IconProps } from "../../../shared/types";

export function NetworkRightIcon({
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
      <rect stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(0 -1 -1 0 22 21)"/><rect stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(0 -1 -1 0 7 15.5)"/><rect stroke="currentColor" strokeWidth="1.5" rx=".6" transform="matrix(0 -1 -1 0 22 10)"/><path stroke="currentColor" strokeWidth="1.5" d="M17 17.5h-3.5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2H17M11.5 12H7"/>
    </svg>
  );
}
