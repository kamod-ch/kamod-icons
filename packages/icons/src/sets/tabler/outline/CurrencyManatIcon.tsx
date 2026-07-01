import type { IconProps } from "../../../shared/types";

export function CurrencyManatIcon({
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
      <path d="M7 19v-7a5 5 0 1 1 10 0v7M12 5v14"/>
    </svg>
  );
}
