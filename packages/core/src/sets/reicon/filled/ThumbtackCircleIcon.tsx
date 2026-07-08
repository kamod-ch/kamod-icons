import type { IconProps } from "../../../shared/types";

export function ThumbtackCircleIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-7.89-3.581 1.482 1.484c1.006 1.006 1.509 1.51 1.392 2.053-.118.543-.784.793-2.116 1.293l-.922.346c-.356.134-.535.201-.672.32q-.091.08-.161.177c-.106.148-.157.332-.258.7-.23.836-.345 1.254-.62 1.41a.76.76 0 0 1-.378.1c-.315 0-.622-.307-1.234-.92l-.473-.473-1.619 1.62a.75.75 0 0 1-1.062-1.059l1.62-1.622-.446-.448c-.61-.61-.914-.914-.916-1.228 0-.135.035-.269.102-.386.157-.271.572-.386 1.402-.615.368-.101.552-.152.7-.259a1 1 0 0 0 .18-.166c.119-.138.185-.318.316-.677l.334-.911c.494-1.347.74-2.02 1.285-2.14s1.05.386 2.064 1.4Z" clipRule="evenodd"/>
    </svg>
  );
}
