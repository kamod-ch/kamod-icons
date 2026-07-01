import type { IconProps } from "../../../shared/types";

export function LongArrowUpLeftIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.22 8.78a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.28.53v7a.75.75 0 0 1-1.28.53z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 8.25a.75.75 0 0 1 .75-.75h3a4.75 4.75 0 0 1 4.75 4.75v7a.75.75 0 0 1-1.5 0v-7A3.25 3.25 0 0 0 12.75 9h-3A.75.75 0 0 1 9 8.25" clipRule="evenodd"/>
    </svg>
  );
}
