import type { IconProps } from "../../../shared/types";

export function CurrencyShekelIcon({
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
      <path d="M6 18V6h4a4 4 0 0 1 4 4v4"/><path d="M18 6v12h-4a4 4 0 0 1-4-4v-4"/>
    </svg>
  );
}
