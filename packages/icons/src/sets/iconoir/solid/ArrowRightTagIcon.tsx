import type { IconProps } from "../../../shared/types";

export function ArrowRightTagIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6 4.25A4.75 4.75 0 0 0 1.25 9v6A4.75 4.75 0 0 0 6 19.75h12A4.75 4.75 0 0 0 22.75 15V9A4.75 4.75 0 0 0 18 4.25zm8.53 11.03 2.75-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75a.75.75 0 1 0-1.06 1.06l1.47 1.47H6.75a.75.75 0 0 0 0 1.5h8.19l-1.47 1.47a.75.75 0 1 0 1.06 1.06" clipRule="evenodd"/>
    </svg>
  );
}
