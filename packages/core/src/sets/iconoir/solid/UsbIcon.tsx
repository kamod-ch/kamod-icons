import type { IconProps } from "../../../shared/types";

export function UsbIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 2v15m0-3 5.5-2V8.5M12.5 16 7 14.5v-3"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m4-16.5v3h3v-3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m10.5 4 2-2 2 2"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
    </svg>
  );
}
