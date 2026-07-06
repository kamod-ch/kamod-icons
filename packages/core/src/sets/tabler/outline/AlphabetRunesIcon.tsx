import type { IconProps } from "../../../shared/types";

export function AlphabetRunesIcon({
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
      <path d="M17 18V6m-4 0 4 4 4-4M11 18l-7-8 4-4 4 4-7 8"/>
    </svg>
  );
}
