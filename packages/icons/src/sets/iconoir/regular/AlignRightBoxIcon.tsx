import type { IconProps } from "../../../shared/types";

export function AlignRightBoxIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m8.006 20.005.01-.01m-4.01.01.01-.01m-.01-3.99.01-.01m-.01-3.99.01-.01m-.01-3.99.01-.01m-.01-3.99.01-.01m3.99.01.01-.01m3.99 16.01h8v-16h-8z"/>
    </svg>
  );
}
