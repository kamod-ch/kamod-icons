import type { IconProps } from "../../../shared/types";

export function ClearFormattingIcon({
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
      <path d="m17 15 4 4m0-4-4 4M7 6V5h11v1M7 19h4m2-14L9 19"/>
    </svg>
  );
}
