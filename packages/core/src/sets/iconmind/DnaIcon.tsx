import type { IconProps } from "../../shared/types";

export function DnaIcon({
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
      <path d="M8 3c8 4 8 14 0 18"/><path d="M16 3c-8 4-8 14 0 18m-8-9h8"/>
    </svg>
  );
}
