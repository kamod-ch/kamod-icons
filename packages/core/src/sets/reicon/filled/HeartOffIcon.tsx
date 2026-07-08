import type { IconProps } from "../../../shared/types";

export function HeartOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l1.918 1.92C2.182 5.744 1.5 7.55 1.5 9.474c0 3.722 2.249 6.729 4.604 8.833 2.357 2.105 4.915 3.393 5.738 3.667a.5.5 0 0 0 .316 0c.782-.26 3.134-1.437 5.391-3.364l3.92 3.92a.75.75 0 1 0 1.061-1.06zm4.458 1.093q.441-.063.905-.063c1.908 0 3.249.893 4.107 1.76.858-.867 2.199-1.76 4.107-1.76 3.866 0 6.393 3.29 6.393 6.974 0 2.52-1.032 4.713-2.423 6.513a.5.5 0 0 1-.75.048L6.705 3.41a.5.5 0 0 1 .284-.848Z"/>
    </svg>
  );
}
