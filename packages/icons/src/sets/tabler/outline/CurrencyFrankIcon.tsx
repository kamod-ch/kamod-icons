import type { IconProps } from "../../../shared/types";

export function CurrencyFrankIcon({
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
      <path d="M17 5h-6a2 2 0 0 0-2 2v12m-2-4h4m-2-4h7"/>
    </svg>
  );
}
