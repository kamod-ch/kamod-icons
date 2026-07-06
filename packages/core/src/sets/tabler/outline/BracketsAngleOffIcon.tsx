import type { IconProps } from "../../../shared/types";

export function BracketsAngleOffIcon({
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
      <path d="M8 4h.01M6.453 6.474 3 12l5 8m8-16 5 8-1.917 3.067m-1.548 2.477L16 20M3 3l18 18"/>
    </svg>
  );
}
