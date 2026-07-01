import type { IconProps } from "../../../shared/types";

export function BrandPythonIcon({
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
      <path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3m4-2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"/><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4m-5-9v.01M13 18v.01"/>
    </svg>
  );
}
