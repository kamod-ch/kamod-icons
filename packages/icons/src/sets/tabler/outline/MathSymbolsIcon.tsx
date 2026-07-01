import type { IconProps } from "../../../shared/types";

export function MathSymbolsIcon({
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
      <path d="M3 12h18m-9-9v18m4.5-16.5 3 3m0-3-3 3M6 4v4M4 6h4m10 10h.01M18 20h.01M4 18h4"/>
    </svg>
  );
}
