import type { IconProps } from "../../../shared/types";

export function Signal2Icon({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.585 18.293a2 2 0 0 1 2.828 0m-5.656-2.829a6 6 0 0 1 8.486 0M4.93 12.636c3.905-3.905 10.237-3.905 14.142 0"/><path d="M2.1 9.808c5.468-5.468 14.332-5.468 19.799 0"/></g>
    </svg>
  );
}
