import type { IconProps } from "../../../shared/types";

export function BrandDolbyDigitalIcon({
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
      <path d="M21 6v12h-.89c-3.34 0-6.047-2.686-6.047-6s2.707-6 6.046-6zM3.063 6v12h.891C7.294 18 10 15.314 10 12S7.293 6 3.954 6z"/>
    </svg>
  );
}
