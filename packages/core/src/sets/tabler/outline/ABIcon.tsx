import type { IconProps } from "../../../shared/types";

export function ABIcon({
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
      <path d="M3 16v-5.5a2.5 2.5 0 0 1 5 0V16m0-4H3m9-6v12m4-2V8h3a2 2 0 0 1 0 4h-3m3 0a2 2 0 0 1 0 4h-3"/>
    </svg>
  );
}
