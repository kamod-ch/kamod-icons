import type { IconProps } from "../../../shared/types";

export function ArrowBottom2Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 6h2.67c3.31 0 4.67 2.35 3.01 5.22l-1.34 2.31L15 15.84c-1.66 2.87-4.37 2.87-6.03 0l-1.34-2.31-1.34-2.31C4.66 8.35 6.01 6 9.33 6z"/>
    </svg>
  );
}
