import type { IconProps } from "../../../shared/types";

export function LotOfCashIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m14.5-3.99.01-.011M7.5 14.01l.01-.011"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2m-6 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
    </svg>
  );
}
