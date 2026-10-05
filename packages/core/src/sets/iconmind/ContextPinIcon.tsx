import type { IconProps } from "../../shared/types";

export function ContextPinIcon({
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
      <path d="M8 6H5v12h3m8-12h3v12h-3m-6-7a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9.5 12.5 12 15l2.5-2.5"/>
    </svg>
  );
}
