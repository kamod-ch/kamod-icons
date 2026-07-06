import type { IconProps } from "../../../shared/types";

export function GoogleOneIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11 5v14a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.64 3.53 6.747 8.171a2 2 0 0 0 2.754 2.901l4.892-4.642a2 2 0 0 0-2.753-2.902"/>
    </svg>
  );
}
