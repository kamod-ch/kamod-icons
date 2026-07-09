import type { IconProps } from "../../../shared/types";

export function RestartIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M18.364 3.058a.75.75 0 0 1 .75.75V8.05a.75.75 0 0 1-.75.75h-4.243a.75.75 0 0 1 0-1.5h2.36a7.251 7.251 0 1 0 2.523 3.822.75.75 0 1 1 1.45-.387 8.75 8.75 0 1 1-2.84-4.447v-2.48a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"/>
    </svg>
  );
}
