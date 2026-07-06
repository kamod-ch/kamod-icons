import type { IconProps } from "../../../shared/types";

export function BracketsOffIcon({
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
      <path d="M5 5v15h3m8-16h3v11m0 4v1h-3M3 3l18 18"/>
    </svg>
  );
}
