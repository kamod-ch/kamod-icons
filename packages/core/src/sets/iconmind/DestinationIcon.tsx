import type { IconProps } from "../../shared/types";

export function DestinationIcon({
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
      <path d="M4 10a8 8 0 0 1 16 0l-8 8Zm8-3v5"/><path d="M9.5 9.5 12 12l2.5-2.5"/>
    </svg>
  );
}
