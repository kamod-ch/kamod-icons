import type { IconProps } from "../../../shared/types";

export function LongArrowRightUpIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.97 6.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-.53 1.28h-7a.75.75 0 0 1-.53-1.28z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M15.5 9.25a.75.75 0 0 1 .75.75v3a4.75 4.75 0 0 1-4.75 4.75h-7a.75.75 0 0 1 0-1.5h7A3.25 3.25 0 0 0 14.75 13v-3a.75.75 0 0 1 .75-.75" clipRule="evenodd"/>
    </svg>
  );
}
