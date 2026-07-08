import type { IconProps } from "../../../shared/types";

export function MapIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.333 3.723v14m7.334-11.446v14M3.377 4.768l4.576-1.017a1.34 1.34 0 0 1 .746.048L15.3 6.2c.239.087.498.104.746.048l3.997-.888a1.333 1.333 0 0 1 1.623 1.301v11.27c0 .625-.435 1.166-1.044 1.301l-4.576 1.017a1.34 1.34 0 0 1-.746-.048L8.7 17.8a1.33 1.33 0 0 0-.746-.048l-3.997.888a1.333 1.333 0 0 1-1.623-1.301V6.069c0-.625.435-1.166 1.044-1.301"/>
    </svg>
  );
}
