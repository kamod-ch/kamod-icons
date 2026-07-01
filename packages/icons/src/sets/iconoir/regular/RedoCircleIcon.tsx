import type { IconProps } from "../../../shared/types";

export function RedoCircleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 10.625H9.8q0 0 0 0s-2.8 0-2.8 3C7 17 9.8 17 9.8 17h.8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.5 14 3.5-3.375L13.5 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
    </svg>
  );
}
