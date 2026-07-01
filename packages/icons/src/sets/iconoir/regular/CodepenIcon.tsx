import type { IconProps } from "../../../shared/types";

export function CodepenIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 9v6M3 15V9m9 12v-6m0-12v6m0 6L3 9l9-6 9 6z"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 21-9-6 9-6 9 6z"/>
    </svg>
  );
}
