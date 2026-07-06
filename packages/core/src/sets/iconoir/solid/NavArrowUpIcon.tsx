import type { IconProps } from "../../../shared/types";

export function NavArrowUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M5.307 15.287A.75.75 0 0 0 6 15.75h12a.75.75 0 0 0 .53-1.28l-6-6a.75.75 0 0 0-1.06 0l-6 6a.75.75 0 0 0-.163.817" clipRule="evenodd"/>
    </svg>
  );
}
