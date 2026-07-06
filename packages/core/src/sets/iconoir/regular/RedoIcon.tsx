import type { IconProps } from "../../../shared/types";

export function RedoIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8H9q0 0 0 0s-5 0-5 4.706C4 18 9 18 9 18h8.714"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.5 11.5 20 8l-3.5-3.5"/>
    </svg>
  );
}
