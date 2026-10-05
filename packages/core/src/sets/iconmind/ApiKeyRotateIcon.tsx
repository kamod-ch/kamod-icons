import type { IconProps } from "../../shared/types";

export function ApiKeyRotateIcon({
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
      <path d="M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h3"/><path d="m12 2 3 3-3 3m-2 2.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2 2V15m0-1.5h2.5"/>
    </svg>
  );
}
