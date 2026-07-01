import type { IconProps } from "../../../shared/types";

export function AdobeLightroomIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 8v8h4m3-5.5V13m0 3v-3m0 0s0-2.5 3-2.5"/>
    </svg>
  );
}
