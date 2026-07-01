import type { IconProps } from "../../../shared/types";

export function CoolingSquareIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zM12.75 7a.75.75 0 0 0-1.5 0v3.725l-3.386-1.88a.75.75 0 0 0-.728 1.31L10.456 12l-3.32 1.844a.75.75 0 1 0 .728 1.312l3.386-1.881V17a.75.75 0 0 0 1.5 0v-3.725l3.386 1.88a.75.75 0 1 0 .728-1.31L13.544 12l3.32-1.844a.75.75 0 1 0-.728-1.312l-3.386 1.881z" clipRule="evenodd"/>
    </svg>
  );
}
