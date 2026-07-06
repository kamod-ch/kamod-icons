import type { IconProps } from "../../shared/types";

export function AlignStartVerticalIcon({
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
      <rect x="6" y="14" rx="2"/><rect x="6" y="4" rx="2"/><path d="M2 2v20"/>
    </svg>
  );
}
