import type { IconProps } from "../../shared/types";

export function DivideIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-7 5h14m-7 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
    </svg>
  );
}
