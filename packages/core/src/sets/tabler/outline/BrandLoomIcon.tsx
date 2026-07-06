import type { IconProps } from "../../../shared/types";

export function BrandLoomIcon({
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
      <path d="M17.464 6.518a6 6 0 1 0-3.023 7.965"/><path d="M17.482 17.464a6 6 0 1 0-7.965-3.023"/><path d="M6.54 17.482a6 6 0 1 0 3.024-7.965"/><path d="M6.518 6.54a6 6 0 1 0 7.965 3.024"/>
    </svg>
  );
}
