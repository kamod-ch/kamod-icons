import type { IconProps } from "../../shared/types";

export function PetBedIcon({
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
      <path d="M3 14c0-4 4-6 9-6s9 2 9 6c0 3-4 4-9 4s-9-1-9-4"/><path d="M7 14c0-2 2-3 5-3s5 1 5 3c0 1.5-2 2-5 2s-5-.5-5-2"/>
    </svg>
  );
}
