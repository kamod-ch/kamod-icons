import type { IconProps } from "../../shared/types";

export function InvoiceIssueIcon({
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
      <path d="M2 11v10h20V11L12 21Z"/><path d="M5 14V3h14v11M8 9h8"/><path d="M13.5 6.5 16 9l-2.5 2.5"/>
    </svg>
  );
}
