import type { IconProps } from "../../shared/types";

export function RussianRubleIcon({
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
      <path d="M6 11h8a4 4 0 0 0 0-8H9v18m-3-6h8"/>
    </svg>
  );
}
