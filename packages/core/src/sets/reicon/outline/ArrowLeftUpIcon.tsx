import type { IconProps } from "../../../shared/types";

export function ArrowLeftUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M5.25 6A.75.75 0 0 1 6 5.25h9a.75.75 0 0 1 0 1.5H7.81l10.72 10.72a.75.75 0 1 1-1.06 1.06L6.75 7.81V15a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/>
    </svg>
  );
}
