import type { IconProps } from "../../../shared/types";

export function TreadmillIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-2.387 1.267-3.308 4.135 4.135 4.135-2.067 4.55"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m4.41 8.508 3.387-3.309 2.816 2.068 2.895 3.308h1.722M6.892 14.71l-1.241.827H2.343m1 6 15.308-2V8"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.892 6 18.65 8 17 9.5m3.891 12.21-2.24-2.173"/>
    </svg>
  );
}
