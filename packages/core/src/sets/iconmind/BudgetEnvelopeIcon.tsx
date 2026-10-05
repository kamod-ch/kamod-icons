import type { IconProps } from "../../shared/types";

export function BudgetEnvelopeIcon({
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
      <path d="M2 11v10h20V11L12 21Z"/><path d="M5 14V3h14v11"/><path d="M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3-2v4"/>
    </svg>
  );
}
