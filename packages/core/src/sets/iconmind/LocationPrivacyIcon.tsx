import type { IconProps } from "../../shared/types";

export function LocationPrivacyIcon({
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
      <path d="M15 5h5v8l-8 8-8-8V5h5"/><path d="M10 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9.5 11.5 12 14l2.5-2.5"/>
    </svg>
  );
}
