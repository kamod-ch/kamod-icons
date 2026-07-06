import type { IconProps } from "../../../shared/types";

export function BusOffIcon({
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
      <path d="M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0m12.18-.828a2 2 0 0 0 2.652 2.648"/><path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8"/><path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3m5-5v3M3 3l18 18"/>
    </svg>
  );
}
