import type { IconProps } from "../../../shared/types";

export function HeartBrokenIcon({
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
      <path d="M11.001 3.8 11 5.763l-1.894 3.79-.047.11A1 1 0 0 0 9.4 10.8l3.332 2.499-1.626 3.254A1 1 0 0 0 11 17v3.417L3.803 13.29a6 6 0 0 1 6.956-9.621zm5.77-.739.246.037a6 6 0 0 1 3.184 10.193l-.044.037L13 20.416v-3.181l1.894-3.788.047-.11A1 1 0 0 0 14.6 12.2l-3.333-2.5 1.627-3.253A1 1 0 0 0 13 6V3.813a6 6 0 0 1 3.77-.752"/>
    </svg>
  );
}
