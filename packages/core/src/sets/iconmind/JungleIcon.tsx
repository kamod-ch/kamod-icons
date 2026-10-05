import type { IconProps } from "../../shared/types";

export function JungleIcon({
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
      <path d="M2.5 12.5c0-5.4 3.6-9 9-9 0 5.4-3.6 9-9 9m9.5.5c0-4.8 3.2-8 8-8 0 4.8-3.2 8-8 8"/><path d="M6.5 20.5c0-5.4 3.6-9 9-9 0 5.4-3.6 9-9 9M3 21h18"/>
    </svg>
  );
}
