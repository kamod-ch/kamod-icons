import type { IconProps } from "../../../shared/types";

export function ArrowUp32Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M12 18H9.33c-3.31 0-4.67-2.35-3.01-5.22l1.34-2.31L9 8.16c1.66-2.87 4.37-2.87 6.03 0l1.34 2.31 1.34 2.31c1.66 2.87.3 5.22-3.01 5.22z"/>
    </svg>
  );
}
