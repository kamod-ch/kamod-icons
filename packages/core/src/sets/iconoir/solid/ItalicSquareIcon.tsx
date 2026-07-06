import type { IconProps } from "../../../shared/types";

export function ItalicSquareIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM16 6.75h-1.46l-3.5 10.5H12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h1.46l3.5-10.5H12a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5" clipRule="evenodd"/>
    </svg>
  );
}
