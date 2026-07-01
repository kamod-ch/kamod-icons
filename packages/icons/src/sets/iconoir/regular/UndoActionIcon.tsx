import type { IconProps } from "../../../shared/types";

export function UndoActionIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5 5v6m3.5-3H15q0 0 0 0s5 0 5 4.706C20 18 15 18 15 18H6.286"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 11.5 8 8l3.5-3.5"/>
    </svg>
  );
}
