import type { IconProps } from "../../../shared/types";

export function BoxArchiveIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="scale(1.33333)"><path d="M14.75 6.25v7a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2v-7"/><rect x="1.75" y="2.75" rx="1" ry="1"/><path d="M7 9.25h4"/></g>
    </svg>
  );
}
