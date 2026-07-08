import type { IconProps } from "../../../shared/types";

export function Weight12Icon({
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
      <path fill="currentColor" d="M17.18 5.25c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75Zm-10.36 0c-1.71 0-3.75.65-3.75 3.75v6c0 3.1 2.04 3.75 3.75 3.75s3.75-.65 3.75-3.75V9c0-3.1-2.04-3.75-3.75-3.75Zm6.61 6h-2.86v1.5h2.86zm9.07 4c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Zm-21 0c-.41 0-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75v5c0 .41-.34.75-.75.75Z"/>
    </svg>
  );
}
