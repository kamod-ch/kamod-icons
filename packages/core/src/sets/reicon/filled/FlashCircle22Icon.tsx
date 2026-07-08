import type { IconProps } from "../../../shared/types";

export function FlashCircle22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M8.68 12.72h1.74v4.05c0 .6.74.88 1.14.43l4.26-4.84a.65.65 0 0 0-.49-1.08h-1.74V7.23c0-.6-.74-.88-1.14-.43l-4.26 4.84a.65.65 0 0 0 .49 1.08"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M11.97 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10"/>
    </svg>
  );
}
