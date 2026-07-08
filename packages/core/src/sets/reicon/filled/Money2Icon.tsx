import type { IconProps } from "../../../shared/types";

export function Money2Icon({
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
      <path fill="currentColor" d="M17 3.5H7c-3 0-5 1.5-5 5v7c0 3.5 2 5 5 5h10c3 0 5-1.5 5-5v-7c0-3.5-2-5-5-5Zm-10.75 11c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Zm7.25-.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-5c0-.41.34-.75.75-.75s.75.34.75.75z"/>
    </svg>
  );
}
