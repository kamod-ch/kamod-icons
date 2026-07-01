import type { IconProps } from "../../../shared/types";

export function CrownCircleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16.8 15.5 1.2-7-4.2 2.1L12 8.5l-1.8 2.1L6 8.5l1.2 7z"/>
    </svg>
  );
}
