import type { IconProps } from "../../../shared/types";

export function BrandSlackIcon({
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
      <path d="M12 12V6a2 2 0 0 1 4 0v6m0-2a2 2 0 1 1 2 2h-6m0 0h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1-2 2v-6m0 0v6a2 2 0 0 1-4 0v-6m0 2a2 2 0 1 1-2-2h6m0 0H6a2 2 0 0 1 0-4h6m-2 0a2 2 0 1 1 2-2v6"/>
    </svg>
  );
}
