import type { IconProps } from "../../../shared/types";

export function Html5Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4 3 1.778 17.09L12 22l6.222-1.91L20 3z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 7H7.5l.5 4.5h8l-.5 5.5-3.5 1-3.5-1-.25-2.5"/>
    </svg>
  );
}
