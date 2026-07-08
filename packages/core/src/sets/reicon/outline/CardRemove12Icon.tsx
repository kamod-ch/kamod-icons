import type { IconProps } from "../../../shared/types";

export function CardRemove12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 8.5h11.5m-7.5 8h2m2.5 0h4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12.03v4.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h7.06"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="m17.309 8.19 3.88-3.88m0 3.88-3.88-3.88"/>
    </svg>
  );
}
