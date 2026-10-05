import type { IconProps } from "../../shared/types";

export function BlobIcon({
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
      <path d="M4 10a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/><path d="M12 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0"/>
    </svg>
  );
}
