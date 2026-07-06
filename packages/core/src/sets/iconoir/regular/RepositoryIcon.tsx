import type { IconProps } from "../../../shared/types";

export function RepositoryIcon({
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
      <path stroke="currentColor" strokeLinecap="round" d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 17v5l2.5-1.6L20 22v-5"/><path stroke="currentColor" strokeLinecap="round" d="M6 17h14"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 17a2 2 0 1 0 0 4h5.5"/>
    </svg>
  );
}
