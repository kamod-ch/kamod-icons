import type { IconProps } from "../../shared/types";

export function PrescriptionIcon({
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
      <path d="M4 3h14l4 4v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m14 0v4h4"/><path d="m7 17 4-4a2.5 2.5 0 0 1 3.5 3.5l-4 4A2.5 2.5 0 0 1 7 17"/>
    </svg>
  );
}
