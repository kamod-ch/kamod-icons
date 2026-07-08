import type { IconProps } from "../../../shared/types";

export function Setting52Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M19 22V11m0-4V2m-7 20v-5m0-4V2M5 22V11m0-4V2m-2 9h4m10 0h4m-11 2h4"/>
    </svg>
  );
}
