import type { IconProps } from "../../../shared/types";

export function HemispherePlusIcon({
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
      <path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9"/><path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9m-5 10h6m-3-3v6"/>
    </svg>
  );
}
