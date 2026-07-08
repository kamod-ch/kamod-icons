import type { IconProps } from "../../../shared/types";

export function ProgrammingArrow2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-4.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 2-3 2.5L15 7M5 9v7m.25-7.5a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5M5 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6m14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
