import type { IconProps } from "../../../shared/types";

export function BrandNexoIcon({
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
      <path d="m17 3 5 3v12l-5 3-10-6V9l10 6V9l-5-3z"/><path d="M12 6 7 3 2 6v12l5 3 4.7-3.13"/>
    </svg>
  );
}
