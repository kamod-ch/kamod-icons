import type { IconProps } from "../../../shared/types";

export function OkrsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M3 5h10M3 12h10M3 19h10m3 2.243 2.121-2.122m0 0L20.243 17m-2.122 2.121L16 17m2.121 2.121 2.122 2.122"/>
    </svg>
  );
}
