import type { IconProps } from "../../shared/types";

export function CatIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5.256A8.2 8.2 0 0 0 12 5a9 9 0 0 0-2 .227M20.098 10c.572 1.068.902 2.24.902 3.444C21 17.89 16.97 21 12 21s-9-3-9-7.556c0-1.251.288-2.41.792-3.444m-.042 0S2.11 3.58 3.5 3 8 3 9.78 5m10.392 5.002s1.64-6.42.25-7-4.5 0-6.282 2M8 14v.5m8-.5v.5"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.25 16.25h1.5L12 17z"/>
    </svg>
  );
}
