import type { IconProps } from "../../../shared/types";

export function LongArrowDownRightIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.28 15.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.28-.53v-7a.75.75 0 0 1 1.28-.53z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M14.5 15.75a.75.75 0 0 1-.75.75h-3A4.75 4.75 0 0 1 6 11.75v-7a.75.75 0 0 1 1.5 0v7A3.25 3.25 0 0 0 10.75 15h3a.75.75 0 0 1 .75.75" clipRule="evenodd"/>
    </svg>
  );
}
