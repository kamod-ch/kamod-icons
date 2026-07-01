import type { IconProps } from "../../../shared/types";

export function Arc3dCenterPointIcon({
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
      <path stroke="currentColor" strokeDasharray="3 3" strokeLinecap="round" strokeLinejoin="round" d="M22 16c0-5.523-4.477-10-10-10-4.1 0-7.625 2.468-9.168 6"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 16h10"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
