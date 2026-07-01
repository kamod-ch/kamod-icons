import type { IconProps } from "../../../shared/types";

export function BbqIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.5 5 22M8 6s1-1.061 1-2c0-1.333-1-2-1-2m4 4s1-1.061 1-2c0-1.333-1-2-1-2m4 4s1-1.061 1-2c0-1.333-1-2-1-2"/><path stroke="currentColor" strokeLinejoin="round" d="M16.5 17.5h-9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.5 14.5 2.1 4.5m.9 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/><path stroke="currentColor" d="M12 15a7 7 0 0 0 6.975-6.4.563.563 0 0 0-.575-.6H5.6a.563.563 0 0 0-.575.6A7 7 0 0 0 12 15Z"/>
    </svg>
  );
}
