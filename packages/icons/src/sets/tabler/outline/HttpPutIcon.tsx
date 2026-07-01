import type { IconProps } from "../../../shared/types";

export function HttpPutIcon({
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
      <path d="M3 12h2a2 2 0 1 0 0-4H3v8m14-8h4m-2 0v8m-9-8v6a2 2 0 1 0 4 0V8"/>
    </svg>
  );
}
