import type { IconProps } from "../../../shared/types";

export function MobileIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M10.168.933h3.664c.883 0 1.591 0 2.164.046.588.048 1.099.15 1.57.39a4 4 0 0 1 1.748 1.748c.24.47.341.982.39 1.57.046.573.046 1.28.046 2.163v9.665c0 .883 0 1.59-.047 2.163-.048.589-.149 1.1-.389 1.57a4 4 0 0 1-1.748 1.749c-.471.24-.982.34-1.57.389-.573.047-1.281.047-2.164.047h-3.664c-.883 0-1.591 0-2.164-.047-.588-.048-1.099-.15-1.57-.39a4 4 0 0 1-1.748-1.747c-.24-.471-.341-.982-.39-1.57-.046-.573-.046-1.281-.046-2.164V6.85c0-.882 0-1.59.047-2.163.048-.588.149-1.1.389-1.57a4 4 0 0 1 1.748-1.748c.471-.24.982-.342 1.57-.39.573-.046 1.281-.046 2.164-.046Zm-.418 3.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm1.25 13.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clipRule="evenodd"/>
    </svg>
  );
}
