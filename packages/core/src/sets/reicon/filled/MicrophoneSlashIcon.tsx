import type { IconProps } from "../../../shared/types";

export function MicrophoneSlashIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="currentColor" strokeWidth="1.333"><path d="m6.11 17.89 1.422-1.422a7.32 7.32 0 0 1-2.865-5.801 1 1 0 0 0-2 0c0 2.913 1.346 5.51 3.444 7.222Zm2.851-2.851 8.372-8.372A5.34 5.34 0 0 0 12 1.333a5.34 5.34 0 0 0-5.333 5.334v4c0 1.81.91 3.408 2.294 4.372Z"/><path d="M2.667 22.333a1 1 0 0 1-.707-1.708L20.627 1.96a1 1 0 1 1 1.414 1.415L3.373 22.04a1 1 0 0 1-.706.293Zm18.666-11.666a1 1 0 0 0-2 0 7.333 7.333 0 0 1-8.435 7.251 1 1 0 0 0-.297 1.978q.198.03.399.051v1.72a1 1 0 0 0 2 0v-1.72c4.684-.499 8.333-4.463 8.333-9.28Z"/></g>
    </svg>
  );
}
