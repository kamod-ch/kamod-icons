import type { IconProps } from "../../../shared/types";

export function LongArrowRightDownIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M14.97 17.53a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-.53-1.28h-7a.75.75 0 0 0-.53 1.28z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M15.5 14.75a.75.75 0 0 0 .75-.75v-3a4.75 4.75 0 0 0-4.75-4.75h-7a.75.75 0 0 0 0 1.5h7A3.25 3.25 0 0 1 14.75 11v3c0 .414.336.75.75.75" clipRule="evenodd"/>
    </svg>
  );
}
