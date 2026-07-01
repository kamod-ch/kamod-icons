import type { IconProps } from "../../shared/types";

export function GalleryVerticalIcon({
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
      <path d="M3 2h18"/><rect x="3" y="6" rx="2"/><path d="M3 22h18"/>
    </svg>
  );
}
