import type { IconProps } from "../../shared/types";

export function DecimalsArrowLeftIcon({
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
      <path d="m13 21-3-3 3-3m7 3H10m-7-7h.01"/><rect x="6" y="3" rx="2.5"/>
    </svg>
  );
}
