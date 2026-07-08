import type { IconProps } from "../../../shared/types";

export function FingerScan2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47c0-.91.74-1.65 1.65-1.65s1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65Z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M15 2h2c3 0 5 2 5 5v2M2 9V7c0-3 2-5 5-5h2m6 20h2c3 0 5-2 5-5v-2M2 15v2c0 3 2 5 5 5h2"/>
    </svg>
  );
}
