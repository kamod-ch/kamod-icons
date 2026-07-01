import type { IconProps } from "../../../shared/types";

export function LongArrowUpRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.28 8.78a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.28.53v7a.75.75 0 0 0 1.28.53z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.5 8.25a.75.75 0 0 0-.75-.75h-3A4.75 4.75 0 0 0 6 12.25v7a.75.75 0 0 0 1.5 0v-7A3.25 3.25 0 0 1 10.75 9h3a.75.75 0 0 0 .75-.75" clipRule="evenodd"/>
    </svg>
  );
}
