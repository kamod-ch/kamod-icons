import type { IconProps } from "../../../shared/types";

export function ShortcutSquareIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15.025 8.025h-4.95m4.95 0v4.95m0-4.95-3.535 3.536c-2.475 2.475 0 4.95 0 4.95"/>
    </svg>
  );
}
