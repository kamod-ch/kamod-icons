import type { IconProps } from "../../../shared/types";

export function Gemini22Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22V3m3.3 2.3L12 2 8.7 5.3M5 7 3 5 1 7m22 0-2-2-2 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 6.04V11q0 6 6 6h6q6 0 6-6V6.04M9 20h6"/>
    </svg>
  );
}
