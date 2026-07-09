import type { IconProps } from "../../../shared/types";

export function ArrowDoorOut3Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M15.667 15.333a1 1 0 0 0-1 1v3.334c0 .184-.15.333-.334.333H7.264l2.3-1.425a2.32 2.32 0 0 0 1.103-1.983V7.409c0-.812-.414-1.554-1.103-1.982L7.264 4h7.07c.183 0 .333.15.333.334v3.333a1 1 0 0 0 2 0V4.333A2.336 2.336 0 0 0 14.333 2H5.667a2.336 2.336 0 0 0-2.334 2.333v15.334A2.336 2.336 0 0 0 5.667 22h8.666a2.336 2.336 0 0 0 2.334-2.333v-3.334a1 1 0 0 0-1-1Z"/><path d="M23.707 11.293 20.04 7.627a1 1 0 1 0-1.415 1.414l1.96 1.96H15a1 1 0 0 0 0 2h5.585l-1.96 1.96a1 1 0 0 0 1.414 1.415l3.666-3.667a1 1 0 0 0 0-1.414Z"/></g>
    </svg>
  );
}
