import type { IconProps } from "../../../shared/types";

export function Hierarchy32Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 12H9c-2.2 0-4-1-4-4v8"/>
    </svg>
  );
}
