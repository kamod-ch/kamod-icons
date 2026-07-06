import type { IconProps } from "../../../shared/types";

export function AgileIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.5 19H22m0 0-2.5-2.5M22 19l-2.5 2.5M12 2 9.5 4.5 12 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10.5 4.5a7.5 7.5 0 0 1 0 15H2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.756 5.5A7.5 7.5 0 0 0 3 12c0 1.688.558 3.246 1.5 4.5"/>
    </svg>
  );
}
