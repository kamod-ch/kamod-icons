import type { IconProps } from "../../../shared/types";

export function SafeArrowRightIcon({
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
      <path stroke="currentColor" d="M3 19V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 3h7a2 2 0 0 1 2 2v.5M12 21h7a2 2 0 0 0 2-2v-.5M8.5 15C7.672 15 7 13.657 7 12s.672-3 1.5-3 1.5 1.343 1.5 3-.672 3-1.5 3m1-5.5 1-1m-3 1-1-1m0 7 1-1m3 1-1-1M2 8h1M2 6h1m0 10H2m1 2H2m13-6h7m0 0-3.5-3.5M22 12l-3.5 3.5"/>
    </svg>
  );
}
