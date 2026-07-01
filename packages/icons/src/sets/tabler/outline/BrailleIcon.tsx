import type { IconProps } from "../../../shared/types";

export function BrailleIcon({
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
      <path d="M15 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 14a1 1 0 1 0 2 0 1 1 0 0 0-2 0m9-7h.01M8 12h.01M16 19h.01"/>
    </svg>
  );
}
