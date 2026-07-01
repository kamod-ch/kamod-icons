import type { IconProps } from "../../../shared/types";

export function BrandTeamsIcon({
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
      <path d="M3 7h10v10H3zm3 3h4m-2 0v4"/><path d="M8.104 17c.47 2.274 2.483 4 4.896 4a5 5 0 0 0 5-5V9h-5m5 9a4 4 0 0 0 4-4V9h-4"/><path d="M13.003 8.83a3 3 0 1 0-1.833-1.833"/><path d="M15.83 8.36a2.5 2.5 0 1 0 .594-4.117"/>
    </svg>
  );
}
