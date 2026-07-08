import type { IconProps } from "../../../shared/types";

export function ImageDepthIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M10.333 2.667c-.918 0-1.666.748-1.666 1.666S9.415 6 10.333 6 12 5.252 12 4.333s-.748-1.666-1.667-1.666Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13.592 9.128-5.697 7.75C7.247 17.757 7.876 19 8.969 19h11.395c1.093 0 1.721-1.243 1.075-2.123L15.74 9.128a1.334 1.334 0 0 0-2.148 0"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.308 13.593 7.471 9.755a1 1 0 0 0-1.608 0l-3.684 4.984a1 1 0 0 0 .804 1.594h5.312"/>
    </svg>
  );
}
