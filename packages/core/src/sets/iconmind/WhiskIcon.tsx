import type { IconProps } from "../../shared/types";

export function WhiskIcon({
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
      <path d="M12 2v7M6 21c0-6 2-12 6-12s6 6 6 12"/><path d="M10 21c0-6 1-12 2-12m2 12c0-6-1-12-2-12"/>
    </svg>
  );
}
