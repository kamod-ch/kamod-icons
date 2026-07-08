import type { IconProps } from "../../../shared/types";

export function PinTackIcon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.667v-5.334m7 0a10.1 10.1 0 0 0-1.292-3.833 10 10 0 0 0-1.375-1.833V5a2.666 2.666 0 0 0-2.666-2.667h-3.334A2.666 2.666 0 0 0 7.667 5v5.667A10 10 0 0 0 6.292 12.5 10.2 10.2 0 0 0 5 16.333z"/>
    </svg>
  );
}
