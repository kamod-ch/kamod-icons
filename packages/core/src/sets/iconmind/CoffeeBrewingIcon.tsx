import type { IconProps } from "../../shared/types";

export function CoffeeBrewingIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M6 4h12l-3 3H9Zm6 3v5m-5 2h10v3c0 2-1.5 3-3 3h-4c-1.5 0-3-1-3-3Z"/>
    </svg>
  );
}
