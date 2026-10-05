import type { IconProps } from "../../shared/types";

export function CapabilityCardIcon({
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
      <path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><path d="M8 14a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 16 14a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 8 14m2-6v3.5M14 8v3.5"/>
    </svg>
  );
}
