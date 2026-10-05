import type { IconProps } from "../../shared/types";

export function AddSearchIcon({
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
      <path d="M5.5 10a6.5 6.5 0 1 0 13 0 6.5 6.5 0 1 0-13 0m11 4.5L21 19M12 6v6M9 9h6"/>
    </svg>
  );
}
