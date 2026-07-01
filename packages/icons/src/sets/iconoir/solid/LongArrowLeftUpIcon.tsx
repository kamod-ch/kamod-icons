import type { IconProps } from "../../../shared/types";

export function LongArrowLeftUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8.53 6.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 .53 1.28h7a.75.75 0 0 0 .53-1.28z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 9.25a.75.75 0 0 0-.75.75v3A4.75 4.75 0 0 0 12 17.75h7a.75.75 0 0 0 0-1.5h-7A3.25 3.25 0 0 1 8.75 13v-3A.75.75 0 0 0 8 9.25" clipRule="evenodd"/>
    </svg>
  );
}
