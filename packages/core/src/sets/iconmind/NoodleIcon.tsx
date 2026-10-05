import type { IconProps } from "../../shared/types";

export function NoodleIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M4 12h16c0 5-4 9-8 9s-8-4-8-9m4-2 6-6m-1.5 6 6-6"/>
    </svg>
  );
}
