import type { IconProps } from "../../../shared/types";

export function MobileDevModeIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 19.01.01-.011"/><path stroke="currentColor" strokeLinecap="round" d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5 19 12l-3.5 3.5m-7-7L5 12l3.5 3.5"/>
    </svg>
  );
}
