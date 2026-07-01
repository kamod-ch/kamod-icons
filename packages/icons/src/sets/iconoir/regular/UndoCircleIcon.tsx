import type { IconProps } from "../../../shared/types";

export function UndoCircleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 10.625h7.2q0 0 0 0s2.8 0 2.8 3C17 17 14.2 17 14.2 17h-.8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 14 7 10.625 10.5 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"/>
    </svg>
  );
}
