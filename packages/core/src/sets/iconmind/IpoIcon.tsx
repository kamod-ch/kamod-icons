import type { IconProps } from "../../shared/types";

export function IpoIcon({
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
      <path d="M9 15V8a3 3 0 0 1 6 0v7Zm0-4-3 3v3h3m6-6 3 3v3h-3m-3-2v5"/>
    </svg>
  );
}
