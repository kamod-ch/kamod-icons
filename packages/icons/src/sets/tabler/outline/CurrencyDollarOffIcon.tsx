import type { IconProps } from "../../../shared/types";

export function CurrencyDollarOffIcon({
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
      <path d="M16.7 8A3 3 0 0 0 14 6h-4M7.443 7.431A3 3 0 0 0 10 12h2m4.564 4.558A3 3 0 0 1 14 18h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3M3 3l18 18"/>
    </svg>
  );
}
