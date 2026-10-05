import type { IconProps } from "../../shared/types";

export function CpuOffloadIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M14 2h5a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5l3-3h5m2 9v2.5m-2.5-1L12 15l2.5-2.5M6 19.75a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 19.75 2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75"/>
    </svg>
  );
}
