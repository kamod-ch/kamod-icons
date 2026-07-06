import type { IconProps } from "../../../shared/types";

export function LongArrowLeftDownIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M8.53 17.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 .53-1.28h7a.75.75 0 0 1 .53 1.28z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M8 14.75a.75.75 0 0 1-.75-.75v-3A4.75 4.75 0 0 1 12 6.25h7a.75.75 0 0 1 0 1.5h-7A3.25 3.25 0 0 0 8.75 11v3a.75.75 0 0 1-.75.75" clipRule="evenodd"/>
    </svg>
  );
}
