import type { IconProps } from "../../../shared/types";

export function CrosshairsSlashIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M14.827 9.173A4 4 0 0 0 12 8c-2.205 0-4 1.795-4 4 0 1.103.448 2.103 1.173 2.827z"/><path d="M1.333 13h1.052a9.65 9.65 0 0 0 2.783 5.832l1.413-1.413A7.64 7.64 0 0 1 4.333 12c0-4.227 3.44-7.667 7.667-7.667 2.113 0 4.03.86 5.419 2.248l1.413-1.413A9.64 9.64 0 0 0 13 2.385V1.333a1 1 0 0 0-2 0v1.052C6.467 2.853 2.853 6.467 2.385 11H1.333a1 1 0 0 0 0 2Zm21.334-2h-1.052a9.6 9.6 0 0 0-1.008-3.364l-1.5 1.5c.358.885.56 1.85.56 2.864 0 4.227-3.44 7.667-7.667 7.667a7.6 7.6 0 0 1-2.864-.56l-1.5 1.5A9.6 9.6 0 0 0 11 21.615v1.052a1 1 0 0 0 2 0v-1.052c4.533-.468 8.147-4.082 8.615-8.615h1.052a1 1 0 0 0 0-2Z"/><path d="M2.667 22.333a1 1 0 0 1-.707-1.708L20.627 1.96a1 1 0 1 1 1.414 1.415L3.373 22.04a1 1 0 0 1-.706.293Z"/></g>
    </svg>
  );
}
