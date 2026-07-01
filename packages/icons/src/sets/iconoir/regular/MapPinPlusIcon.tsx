import type { IconProps } from "../../../shared/types";

export function MapPinPlusIcon({
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
      <path stroke="currentColor" strokeWidth="1.5" d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 19h3m3 0h-3m0 0v-3m0 3v3"/>
    </svg>
  );
}
