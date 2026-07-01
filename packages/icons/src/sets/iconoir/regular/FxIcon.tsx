import type { IconProps } from "../../../shared/types";

export function FxIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 17V7h7m-7 5h5m5 5 4-5m0 0 4-5m-4 5-4-5m4 5 4 5"/>
    </svg>
  );
}
