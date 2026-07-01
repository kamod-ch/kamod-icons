import type { IconProps } from "../../../shared/types";

export function AlarmIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 13h-5V8M5 3.5 7 2m12 1.5L17 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18"/>
    </svg>
  );
}
