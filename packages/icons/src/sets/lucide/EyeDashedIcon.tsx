import type { IconProps } from "../../shared/types";

export function EyeDashedIcon({
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
      <path d="M13.054 18.946a11 11 0 0 1-2.11 0m2.11-13.892a11 11 0 0 0-2.11-.001m6.128 1.221a11 11 0 0 1 1.753 1.173m0 9.105a11 11 0 0 1-1.753 1.174M2.514 13.303a11 11 0 0 1-.452-.954 1 1 0 0 1 0-.697 11 11 0 0 1 .45-.955m18.973 0a11 11 0 0 1 .453.955 1 1 0 0 1 0 .697 11 11 0 0 1-.453.954M5.173 7.448a11 11 0 0 1 1.753-1.174m0 11.452a11 11 0 0 1-1.753-1.174"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}
