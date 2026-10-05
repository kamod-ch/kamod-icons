import type { IconProps } from "../../shared/types";

export function TrueFalseIcon({
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
      <path d="M3 4h8v8H3Z"/><path d="m5 8 2 2 4-4m2 6h8v8h-8Zm2 2 4 4m0-4-4 4"/>
    </svg>
  );
}
