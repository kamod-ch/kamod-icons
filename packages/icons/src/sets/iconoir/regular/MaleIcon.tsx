import type { IconProps } from "../../../shared/types";

export function MaleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14.232 9.747a6 6 0 1 0-8.465 8.506 6 6 0 0 0 8.465-8.506m0 0L20 4m0 0h-4m4 0v4"/>
    </svg>
  );
}
