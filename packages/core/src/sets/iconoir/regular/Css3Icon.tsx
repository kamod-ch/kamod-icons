import type { IconProps } from "../../../shared/types";

export function Css3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 3 1.778 17.09L12 22l6.222-1.91L20 3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 7h9.5l-1 10-3.5 1-3.5-1-.25-2.5m7.75-3H7.5"/>
    </svg>
  );
}
