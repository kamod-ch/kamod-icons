import type { IconProps } from "../../../shared/types";

export function EcologyBookIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 14s.9-3.118 3-5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.802 12.425-.134.012a3.094 3.094 0 0 1-3.366-2.774 3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.498"/><path stroke="currentColor" strokeLinecap="round" d="M6 17h14M6 21h14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 21a2 2 0 1 1 0-4"/>
    </svg>
  );
}
