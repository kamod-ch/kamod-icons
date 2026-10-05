import type { IconProps } from "../../shared/types";

export function ModelGuardIcon({
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
      <path d="M6 6.5 9.5 10 6 13.5 2.5 10Zm7 4.5h9v5.5L17.5 21 13 16.5Z"/>
    </svg>
  );
}
