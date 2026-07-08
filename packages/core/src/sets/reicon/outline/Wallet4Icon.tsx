import type { IconProps } from "../../../shared/types";

export function Wallet4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12v5c0 3-2 5-5 5H7c-3 0-5-2-5-5v-5c0-2.72 1.64-4.62 4.19-4.94Q6.58 7 7 7h10c.26 0 .51.01.75.05C20.33 7.35 22 9.26 22 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.751 7.05c-.24-.04-.49-.05-.75-.05h-10q-.42 0-.81.06c.14-.28.34-.54.58-.78l3.25-3.26a3.525 3.525 0 0 1 4.96 0l1.75 1.77c.64.63.98 1.43 1.02 2.26M22 12.5h-3c-1.1 0-2 .9-2 2s.9 2 2 2h3"/>
    </svg>
  );
}
