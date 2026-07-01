import type { IconProps } from "../../../shared/types";

export function MicrowaveIcon({
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
      <path d="M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm12-1v12m3-6h.01M18 15h.01M18 9h.01"/><path d="M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0m-5 3c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0"/>
    </svg>
  );
}
