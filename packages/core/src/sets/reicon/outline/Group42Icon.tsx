import type { IconProps } from "../../../shared/types";

export function Group42Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M7.01 18 3 13.99c-1.34-1.34-1.34-2.67 0-4.01L9.68 3.3l7.35 7.35c.37.37.37.97 0 1.34l-6.02 6.02c-1.32 1.32-2.66 1.32-4-.01M8.35 1.95l1.34 1.34m-7.62 8.63 15.12-.66M3 22h13"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.85 15S17 17.01 17 18.24c0 1.02.83 1.85 1.85 1.85s1.85-.83 1.85-1.85c0-1.23-1.85-3.24-1.85-3.24"/>
    </svg>
  );
}
