import type { IconProps } from "../../../shared/types";

export function LadderIcon({
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
      <path d="M8 3v18m8-18v18m-8-7h8m-8-4h8M8 6h8M8 18h8"/>
    </svg>
  );
}
