import type { IconProps } from "../../../shared/types";

export function BoxAlignTopLeftIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M10 3H5a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m5 0a1 1 0 0 1 .117 1.993L14.99 5a1 1 0 0 1-.117-1.993zm5 0a1 1 0 0 1 .117 1.993L19.99 5a1 1 0 0 1-.117-1.993zm0 5a1 1 0 0 1 .117 1.993L19.99 10a1 1 0 0 1-.117-1.993zm0 6a1 1 0 0 1 .117 1.993L19.99 16a1 1 0 0 1-.117-1.993zM4 14a1 1 0 0 1 .117 1.993L3.99 16a1 1 0 0 1-.117-1.993zm16 5a1 1 0 0 1 .117 1.993L19.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L14.99 21a1 1 0 0 1-.117-1.993zm-6 0a1 1 0 0 1 .117 1.993L8.99 21a1 1 0 0 1-.117-1.993zm-5 0a1 1 0 0 1 .117 1.993L3.99 21a1 1 0 0 1-.117-1.993z"/>
    </svg>
  );
}
