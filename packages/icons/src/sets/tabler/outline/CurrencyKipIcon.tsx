import type { IconProps } from "../../../shared/types";

export function CurrencyKipIcon({
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
      <path d="M6 12h12M9 5v14m7 0a7 7 0 0 0-7-7 7 7 0 0 0 7-7"/>
    </svg>
  );
}
