import type { IconProps } from "../../../shared/types";

export function User4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10m8.59 10c0-3.87-3.85-7-8.59-7s-8.59 3.13-8.59 7"/>
    </svg>
  );
}
