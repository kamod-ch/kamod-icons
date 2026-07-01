import type { IconProps } from "../../../shared/types";

export function DribbbleIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.673 20.844C15.5 14 12.5 8 8.5 2.63"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2.067 10.84C6 11 15.283 10.5 19.142 5m2.826 7.81C15.344 10.84 7.5 14 5.23 19.361"/>
    </svg>
  );
}
