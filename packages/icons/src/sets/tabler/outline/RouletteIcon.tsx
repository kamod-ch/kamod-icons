import type { IconProps } from "../../../shared/types";

export function RouletteIcon({
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
      <path d="M10.586 10.586 9 9m4.414 1.586L15 9m-1.586 4.414L15 15m-4.414-1.586L9 15m5-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.5-7.794-.5.866M7.5 19.794l.5-.866M19.794 7.5l-.866.5M4.206 16.5l.866-.5M7.5 4.206l.5.866m8.5 14.722-.5-.866M4.206 7.5l.866.5m14.722 8.5-.866-.5M12 3v1m0 17v-1m9-8h-1M3 12h1"/><path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18"/>
    </svg>
  );
}
