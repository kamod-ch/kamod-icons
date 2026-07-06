import type { IconProps } from "../../../shared/types";

export function ArrowsUpFromLineIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 20h18M6 17V4m0 0L2 8m4-4 4 4m8 9V4m0 0-4 4m4-4 4 4"/>
    </svg>
  );
}
