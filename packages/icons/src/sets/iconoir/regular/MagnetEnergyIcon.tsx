import type { IconProps } from "../../../shared/types";

export function MagnetEnergyIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 9v6.74C5 19.199 8.134 22 12 22s7-2.802 7-6.26V9M5 9h3m8 0h3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.074 11.5v3.56c0 1.072-.928 1.94-2.074 1.94s-2.074-.868-2.074-1.94V11.5"/><path stroke="currentColor" strokeLinejoin="round" d="M10 13H5m14 0h-5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.667 2 10 5h4l-1.667 3"/>
    </svg>
  );
}
