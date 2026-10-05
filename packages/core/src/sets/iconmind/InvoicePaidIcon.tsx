import type { IconProps } from "../../shared/types";

export function InvoicePaidIcon({
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
      <path d="M2 11v10h20V11L12 21Z"/><path d="M5 14V3h14v11"/><path d="m9 9 2 2 4-4"/>
    </svg>
  );
}
