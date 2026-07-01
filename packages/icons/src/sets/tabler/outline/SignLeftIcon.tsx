import type { IconProps } from "../../../shared/types";

export function SignLeftIcon({
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
      <path d="M16 21h-4m2 0V11m0-5V3m4 3H8L6 8.5 8 11h10z"/>
    </svg>
  );
}
