import type { IconProps } from "../../../shared/types";

export function NavArrowLeftIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M15.287 18.693A.75.75 0 0 0 15.75 18V6a.75.75 0 0 0-1.28-.53l-6 6a.75.75 0 0 0 0 1.06l6 6a.75.75 0 0 0 .817.163" clipRule="evenodd"/>
    </svg>
  );
}
