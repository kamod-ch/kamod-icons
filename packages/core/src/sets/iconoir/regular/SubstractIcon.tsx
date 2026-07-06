import type { IconProps } from "../../../shared/types";

export function SubstractIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 3.6v10.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6M13.5 21h3m4.5-7.5v3m0 3v.9a.6.6 0 0 1-.6.6h-.9m-9 0h-.9a.6.6 0 0 1-.6-.6v-.9M19.5 9h.9a.6.6 0 0 1 .6.6v.9"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 9H9.6a.6.6 0 0 0-.6.6v6.9"/>
    </svg>
  );
}
