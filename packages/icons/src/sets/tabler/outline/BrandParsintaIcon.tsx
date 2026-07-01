import type { IconProps } from "../../../shared/types";

export function BrandParsintaIcon({
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
      <path d="M12 3a9 9 0 1 0 9 9"/><path d="M21 12a9 9 0 0 0-9-9" opacity=".5"/><path d="M10 9v6l5-3z"/>
    </svg>
  );
}
