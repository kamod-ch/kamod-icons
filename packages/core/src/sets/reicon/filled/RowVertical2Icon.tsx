import type { IconProps } from "../../../shared/types";

export function RowVertical2Icon({
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
      <path fill="currentColor" d="M19.9 13.5H4.1c-1.5 0-2.1.64-2.1 2.23v4.04C2 21.36 2.6 22 4.1 22h15.8c1.5 0 2.1-.64 2.1-2.23v-4.04c0-1.59-.6-2.23-2.1-2.23Zm0-11.5H4.1C2.6 2 2 2.64 2 4.23v4.04c0 1.59.6 2.23 2.1 2.23h15.8c1.5 0 2.1-.64 2.1-2.23V4.23C22 2.64 21.4 2 19.9 2Z"/>
    </svg>
  );
}
