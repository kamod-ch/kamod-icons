import type { IconProps } from "../../shared/types";

export function DewPointIcon({
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
      <path d="m12 6 2.5 2.5a2.5 2.5 0 0 1-5 0Zm8 8a8 8 0 0 1-16 0m-1 5h18"/>
    </svg>
  );
}
