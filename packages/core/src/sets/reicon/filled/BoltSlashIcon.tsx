import type { IconProps } from "../../../shared/types";

export function BoltSlashIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M19.667 8.667h-.09l-9.47 9.467-.186 3.158a1.28 1.28 0 0 0 .843 1.286q.22.08.446.079c.397 0 .778-.184 1.027-.517l8.498-11.34c.304-.406.352-.942.125-1.396a1.33 1.33 0 0 0-1.193-.736ZM4.333 15.333H8.66l6.67-6.666h-1.605l.353-5.959a1.28 1.28 0 0 0-.843-1.286 1.28 1.28 0 0 0-1.473.438L3.266 13.2a1.33 1.33 0 0 0-.125 1.396c.227.454.684.736 1.192.736Z"/><path d="M2.667 22.333a1 1 0 0 1-.707-1.708L20.627 1.96a1 1 0 1 1 1.414 1.415L3.373 22.04a1 1 0 0 1-.706.293Z"/></g>
    </svg>
  );
}
