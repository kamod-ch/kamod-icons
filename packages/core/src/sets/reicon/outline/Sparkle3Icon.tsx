import type { IconProps } from "../../../shared/types";

export function Sparkle3Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M7.544 3.987 5.86 3.425l-.561-1.684c-.183-.544-1.083-.544-1.266 0l-.561 1.684-1.684.562a.667.667 0 0 0 0 1.264l1.684.561.561 1.684a.668.668 0 0 0 1.267 0l.561-1.684 1.684-.561a.667.667 0 0 0 0-1.264Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m12.667 3.667 2.549 6.449 6.45 2.55-6.45 2.551-2.55 6.45-2.55-6.45-6.45-2.55 6.45-2.551z"/>
    </svg>
  );
}
