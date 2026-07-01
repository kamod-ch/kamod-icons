import type { IconProps } from "../../../shared/types";

export function BrandGitlabIcon({
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
      <path d="m21 14-9 7-9-7L6 3l3 7h6l3-7z"/>
    </svg>
  );
}
