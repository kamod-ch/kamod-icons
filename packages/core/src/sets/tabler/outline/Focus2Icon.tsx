import type { IconProps } from "../../../shared/types";

export function Focus2Icon({
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
      <path fill="currentColor" d="M11.5 12a.5.5 0 1 0 1 0 .5.5 0 1 0-1 0"/><path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0m7-9v2m-9 7h2m7 7v2m7-9h2"/>
    </svg>
  );
}
