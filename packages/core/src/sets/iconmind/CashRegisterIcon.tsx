import type { IconProps } from "../../shared/types";

export function CashRegisterIcon({
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
      <path d="M7 4.5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2V7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2ZM3 14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M10 16.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
