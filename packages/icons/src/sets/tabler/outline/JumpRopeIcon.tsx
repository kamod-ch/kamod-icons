import type { IconProps } from "../../../shared/types";

export function JumpRopeIcon({
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
      <path d="M6 14V8a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6"/><path d="M16 5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2 2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2z"/>
    </svg>
  );
}
