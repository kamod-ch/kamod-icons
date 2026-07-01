import type { IconProps } from "../../../shared/types";

export function SofaOffIcon({
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
      <path d="M18 14v-1a2 2 0 1 1 4 0v5m-3 1H3a1 1 0 0 1-1-1v-5a2 2 0 1 1 4 0v1h8"/><path d="M4 11V8c0-1.082.573-2.03 1.432-2.558M9 5h8a3 3 0 0 1 3 3v3m-8-6v3m0 4v2M3 3l18 18"/>
    </svg>
  );
}
