import type { IconProps } from "../../../shared/types";

export function Chart12Icon({
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
      <path fill="currentColor" d="M21 22.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM5.6 8.379H4c-.55 0-1 .45-1 1v8.62c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1v-8.62c0-.56-.45-1-1-1Zm7.2-3.188h-1.6c-.55 0-1 .45-1 1v11.81c0 .55.45 1 1 1h1.6c.55 0 1-.45 1-1V6.191c0-.55-.45-1-1-1ZM20 2h-1.6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1H20c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Z"/>
    </svg>
  );
}
