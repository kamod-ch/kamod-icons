import type { IconProps } from "../../../shared/types";

export function CashBanknoteEditIcon({
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
      <path d="M11 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m-3 0h.01m12.41 3.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z"/>
    </svg>
  );
}
