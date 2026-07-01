import type { IconProps } from "../../../shared/types";

export function Fillet3dIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 20v-4C2 8.268 8.268 2 16 2h4m.839 18.84h-3.536m3.536 0v-3.536m0 3.535L18 18"/><path stroke="currentColor" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" d="m9 9 7 7"/>
    </svg>
  );
}
