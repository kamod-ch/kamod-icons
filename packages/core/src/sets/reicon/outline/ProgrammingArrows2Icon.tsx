import type { IconProps } from "../../../shared/types";

export function ProgrammingArrows2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 16V6.5c0-1.1-.9-2-2-2h-5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 2-3 2.5L14 7m5 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M5 8v9.5c0 1.1.9 2 2 2h5.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10 22 3-2.5-3-2.5M5 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
