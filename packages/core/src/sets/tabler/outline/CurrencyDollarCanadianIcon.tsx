import type { IconProps } from "../../../shared/types";

export function CurrencyDollarCanadianIcon({
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
      <path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4m-4 0H9A6 6 0 1 1 9 6h1m7 14v-2m1-12V4"/>
    </svg>
  );
}
