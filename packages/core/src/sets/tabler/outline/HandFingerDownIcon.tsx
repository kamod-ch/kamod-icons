import type { IconProps } from "../../../shared/types";

export function HandFingerDownIcon({
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
      <path d="M8 12v8.5a1.5 1.5 0 0 0 3 0V13m0 .5v2a1.5 1.5 0 0 0 3 0V13m0 1.5a1.5 1.5 0 0 0 3 0V13"/><path d="M17 13.5a1.5 1.5 0 0 0 3 0V9a6 6 0 0 0-6-6h-2 .208a6 6 0 0 0-5.012 2.7L7 6q-.468.718-3.286 5.728a1.5 1.5 0 0 0 .536 2.022c.734.44 1.674.325 2.28-.28L8 12"/>
    </svg>
  );
}
