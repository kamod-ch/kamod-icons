import type { IconProps } from "../../../shared/types";

export function Discover12Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.8 2.1 7.87 4.59c-1.45.36-2.92 1.83-3.28 3.28L2.1 17.8c-.75 3 1.09 4.85 4.1 4.1l9.93-2.48c1.44-.36 2.92-1.84 3.28-3.28L21.9 6.2c.75-3-1.1-4.85-4.1-4.1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
    </svg>
  );
}
