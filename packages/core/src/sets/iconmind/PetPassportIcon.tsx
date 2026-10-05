import type { IconProps } from "../../shared/types";

export function PetPassportIcon({
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
      <path d="M6 3v18h12V3Z"/><path d="M8 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3-1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m3 1a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-5 4a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/>
    </svg>
  );
}
