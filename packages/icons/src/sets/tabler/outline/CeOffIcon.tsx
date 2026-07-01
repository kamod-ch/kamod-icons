import type { IconProps } from "../../../shared/types";

export function CeOffIcon({
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
      <path d="M6.53 6.53A6.001 6.001 0 0 0 9 18M21 6a6 6 0 0 0-5.927 5.061L16 12m0 0h5M3 3l18 18"/>
    </svg>
  );
}
