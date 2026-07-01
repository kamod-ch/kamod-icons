import type { IconProps } from "../../../shared/types";

export function PathArrowIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M17.47 2.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-.53 1.28h-2.75v9.25a.75.75 0 0 1-1.5 0V7.25H14.5a.75.75 0 0 1-.53-1.28z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M3.25 7.5a4.25 4.25 0 0 1 8.5 0v9a2.75 2.75 0 1 0 5.5 0 .75.75 0 0 1 1.5 0 4.25 4.25 0 0 1-8.5 0v-9a2.75 2.75 0 1 0-5.5 0v12a.75.75 0 0 1-1.5 0z" clipRule="evenodd"/>
    </svg>
  );
}
