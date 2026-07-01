import type { IconProps } from "../../../shared/types";

export function IceCreamIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10.75 20a1.25 1.25 0 1 0 2.5 0v-2h1.5v2a2.75 2.75 0 1 1-5.5 0v-2h1.5z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.25 16a2.75 2.75 0 0 0 2.751 2.75H17A2.75 2.75 0 0 0 19.75 16V9a7.75 7.75 0 0 0-15.5 0zm13-3.25a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5z" clipRule="evenodd"/>
    </svg>
  );
}
