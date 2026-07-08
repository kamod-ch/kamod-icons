import type { IconProps } from "../../../shared/types";

export function SunFogIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22h8M5 19h14M2 16h20"/><path stroke="currentColor" strokeWidth="1.5" d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07-.392.393M5.322 5.322l-.393-.393"/>
    </svg>
  );
}
