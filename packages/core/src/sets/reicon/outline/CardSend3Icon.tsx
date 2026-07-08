import type { IconProps } from "../../../shared/types";

export function CardSend3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 8.5h12.5m-8.5 8h2m2.5 0h4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 14.03v2.08c0 3.51-.89 4.39-4.44 4.39H6.44C2.89 20.5 2 19.62 2 16.11V7.89c0-3.51.89-4.39 4.44-4.39h8.06m5.5 6v-6l2 2m-2-2-2 2"/>
    </svg>
  );
}
