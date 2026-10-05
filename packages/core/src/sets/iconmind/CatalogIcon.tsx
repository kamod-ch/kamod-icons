import type { IconProps } from "../../shared/types";

export function CatalogIcon({
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
      <path d="M3 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m-1 7a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm9.5 0a2 2 0 0 1 2-2H16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2Z"/>
    </svg>
  );
}
