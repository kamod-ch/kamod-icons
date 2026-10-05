import type { IconProps } from "../../shared/types";

export function PrefixCacheIcon({
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
      <path d="M8 6H5v12h3m8-12h3v12h-3M9 9h6m-1.5 2L11 13.5h2.5L11 16"/>
    </svg>
  );
}
