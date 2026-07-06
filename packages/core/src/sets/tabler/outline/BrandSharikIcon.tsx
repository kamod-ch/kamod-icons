import type { IconProps } from "../../../shared/types";

export function BrandSharikIcon({
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
      <path d="M4.281 16.606A8.97 8.97 0 0 1 5.644 5.629a9.03 9.03 0 0 1 11.011-1.346C15.071 8.975 14.24 11.243 12 13c-1.584 1.242-3.836 2.24-7.719 3.606M20.616 9.3c2.113 7.59-4.892 13.361-11.302 11.264 1.931-3.1 3.235-4.606 4.686-6.065 1.705-1.715 3.591-3.23 6.616-5.199"/>
    </svg>
  );
}
