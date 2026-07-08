import type { IconProps } from "../../../shared/types";

export function MoneyChange2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M2 11V9c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v6c0 3.5-2 5-5 5h-5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m6.5-5v5M2 15.5h5.34c.64 0 1.16.52 1.16 1.16v1.28"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M3.22 14.28 2 15.5l1.22 1.22m5.28 4.06H3.16c-.64 0-1.16-.52-1.16-1.16v-1.28"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="m7.281 22 1.22-1.22-1.22-1.22"/>
    </svg>
  );
}
