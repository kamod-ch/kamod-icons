import type { IconProps } from "../../../shared/types";

export function WavePulseIcon({
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
      <path fill="currentColor" d="M22.75 12.501a.75.75 0 0 1-.75.75h-3.764c-.121 0-.258.094-.326.222l-1.221 2.318c-.255.484-.773.75-1.322.684a1.29 1.29 0 0 1-1.105-.981l-2.163-9.013-2.241 12.21a1.294 1.294 0 0 1-1.236 1.059h-.051a1.295 1.295 0 0 1-1.262-.965l-1.377-5.248c-.036-.138-.15-.287-.316-.287H2a.75.75 0 0 1 0-1.5h3.615c.823 0 1.55.578 1.767 1.406l1.156 4.409 2.25-12.254a1.29 1.29 0 0 1 1.247-1.059 1.28 1.28 0 0 1 1.308.99l2.255 9.4.984-1.867c.327-.622.976-1.023 1.653-1.023h3.764a.75.75 0 0 1 .75.75z"/>
    </svg>
  );
}
