import type { IconProps } from "../../../shared/types";

export function LongArrowDownLeftIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M6.22 15.22a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.28-.53v-7a.75.75 0 0 0-1.28-.53z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M9 15.75c0 .414.336.75.75.75h3a4.75 4.75 0 0 0 4.75-4.75v-7a.75.75 0 0 0-1.5 0v7A3.25 3.25 0 0 1 12.75 15h-3a.75.75 0 0 0-.75.75" clipRule="evenodd"/>
    </svg>
  );
}
