import type { IconProps } from "../../../shared/types";

export function BrandDiggIcon({
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
      <path d="M6 15H3v-4h3m9 4h-3v-4h3m-6 4v-4"/><path d="M15 11v7h-3M6 7v8m15 0h-3v-4h3"/><path d="M21 11v7h-3"/>
    </svg>
  );
}
