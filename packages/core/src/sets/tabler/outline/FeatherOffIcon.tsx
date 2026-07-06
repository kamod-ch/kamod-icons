import type { IconProps } from "../../../shared/types";

export function FeatherOffIcon({
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
      <path d="m4 20 8-8m2-7v5h5M9 11v4h4m-7-2v5h5m-5-5 3.502-3.502m2.023-2.023L14 5"/><path d="M19 10c.638-.636 1-1.515 1-2.486A3.515 3.515 0 0 0 16.483 4c-.97 0-1.847.367-2.483 1m-3 13 3.499-3.499m2.008-2.008L19 10M3 3l18 18"/>
    </svg>
  );
}
