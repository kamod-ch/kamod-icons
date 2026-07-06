import type { IconProps } from "../../shared/types";

export function PauseOctagonIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 15V9m4 6V9M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z"/>
    </svg>
  );
}
