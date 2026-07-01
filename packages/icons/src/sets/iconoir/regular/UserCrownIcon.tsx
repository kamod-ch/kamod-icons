import type { IconProps } from "../../../shared/types";

export function UserCrownIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 20v-1a7 7 0 0 1 10-6.326M21 22l1-6-3.5 1.8L17 16l-1.5 1.8L12 16l1 6z"/>
    </svg>
  );
}
