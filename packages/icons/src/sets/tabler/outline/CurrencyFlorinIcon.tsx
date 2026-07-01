import type { IconProps } from "../../../shared/types";

export function CurrencyFlorinIcon({
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
      <path d="M8 12h8m-9 7c1.213 0 2.31-.723 2.788-1.838l4.424-10.324A3.03 3.03 0 0 1 17 5"/>
    </svg>
  );
}
