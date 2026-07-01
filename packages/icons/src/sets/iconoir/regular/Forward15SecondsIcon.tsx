import type { IconProps } from "../../../shared/types";

export function Forward15SecondsIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 13a9 9 0 1 1-9-9m0 0h7.5m0 0-2-2m2 2-2 2M9 9v7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2"/>
    </svg>
  );
}
