import type { IconProps } from "../../shared/types";

export function TokenAuthIcon({
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
      <path d="M2 12a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6a4 4 0 0 1-4-4"/><path d="M5 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m4 0a1 1 0 1 0 2 0 1 1 0 1 0-2 0m8 0h4m-3 0v3m3-3v2.5"/>
    </svg>
  );
}
