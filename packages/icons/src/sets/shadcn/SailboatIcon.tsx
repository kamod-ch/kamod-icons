import type { IconProps } from "../../shared/types";

export function SailboatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4m-1-4L10 2 3 14zM10 2v16"/>
    </svg>
  );
}
