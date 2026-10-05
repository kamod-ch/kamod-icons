import type { IconProps } from "../../shared/types";

export function KeyShieldIcon({
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
      <path d="M15 5h5v8l-8 8-8-8V5h5"/><path d="M10 9.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2V14m0-1.5h2.5"/>
    </svg>
  );
}
