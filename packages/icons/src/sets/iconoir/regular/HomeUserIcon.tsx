import type { IconProps } from "../../../shared/types";

export function HomeUserIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5 12 4l9.5 5.5"/><path stroke="currentColor" strokeWidth="1.5" d="M7 21v-1a5 5 0 0 1 10 0v1"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
    </svg>
  );
}
