import type { IconProps } from "../../../shared/types";

export function MicrophoneCheckIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.5 20.5 2 2 5-5"/><rect x="5" y="2" stroke="currentColor" strokeWidth="1.5" rx="3"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"/>
    </svg>
  );
}
