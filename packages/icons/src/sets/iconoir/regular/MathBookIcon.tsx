import type { IconProps } from "../../../shared/types";

export function MathBookIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 21a2 2 0 1 1 0-4"/><path stroke="currentColor" strokeLinecap="round" d="M10 10h4"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 13.01.01-.011M12 7.01l.01-.011"/>
    </svg>
  );
}
