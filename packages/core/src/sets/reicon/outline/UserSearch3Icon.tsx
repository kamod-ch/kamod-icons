import type { IconProps } from "../../../shared/types";

export function UserSearch3Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M3.41 22c0-3.87 3.85-7 8.59-7m6.2 6.4a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4m3.8.6-1-1"/>
    </svg>
  );
}
