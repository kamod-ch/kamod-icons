import type { IconProps } from "../../../shared/types";

export function ArrowLeftTagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M18 4.25A4.75 4.75 0 0 1 22.75 9v6A4.75 4.75 0 0 1 18 19.75H6A4.75 4.75 0 0 1 1.25 15V9A4.75 4.75 0 0 1 6 4.25zM8.97 15.28l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 1 1 1.06 1.06l-1.47 1.47h8.19a.75.75 0 0 1 0 1.5H8.56l1.47 1.47a.75.75 0 1 1-1.06 1.06" clipRule="evenodd"/>
    </svg>
  );
}
