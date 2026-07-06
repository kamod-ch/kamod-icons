import type { IconProps } from "../../../shared/types";

export function ShareAndroidIcon({
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
      <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-14a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/><path stroke="currentColor" strokeWidth="1.5" d="m15.5 6.5-7 4m0 3 7 4"/>
    </svg>
  );
}
