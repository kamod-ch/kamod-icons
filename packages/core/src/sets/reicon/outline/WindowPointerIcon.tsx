import type { IconProps } from "../../../shared/types";

export function WindowPointerIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M5.667 8c.552 0 1-.453 1-1s-.448-1-1-1-1 .453-1 1 .448 1 1 1ZM9 8c.552 0 1-.453 1-1s-.448-1-1-1-1 .453-1 1 .448 1 1 1Z"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.333 10.333h19.334m0 2.264V6.333A2.67 2.67 0 0 0 19 3.667H5a2.67 2.67 0 0 0-2.667 2.666v11.334A2.67 2.67 0 0 0 5 20.333h7.104"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.835 14.36 7.92 2.893c.333.12.324.6-.015.707l-3.625 1.16-1.16 3.627c-.108.333-.584.346-.706.013l-2.893-7.92a.373.373 0 0 1 .479-.48"/>
    </svg>
  );
}
