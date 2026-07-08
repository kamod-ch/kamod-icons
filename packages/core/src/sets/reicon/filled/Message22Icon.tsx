import type { IconProps } from "../../../shared/types";

export function Message22Icon({
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
      <path fill="currentColor" d="M17 2.43H7c-3 0-5 2-5 5v6c0 3 2 5 5 5h4l4.45 2.96a.997.997 0 0 0 1.55-.83v-2.13c3 0 5-2 5-5v-6c0-3-2-5-5-5Zm-1.5 8.82h-7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h7c.41 0 .75.34.75.75s-.34.75-.75.75Z"/>
    </svg>
  );
}
