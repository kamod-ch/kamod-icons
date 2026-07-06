import type { IconProps } from "../../../shared/types";

export function GlassFullIcon({
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
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M8 21h8m-4-6v6m5-18 1 7c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-7z"/><path d="M6 10a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/>
    </svg>
  );
}
