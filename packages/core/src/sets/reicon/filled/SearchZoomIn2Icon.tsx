import type { IconProps } from "../../../shared/types";

export function SearchZoomIn2Icon({
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
      <path fill="currentColor" d="M11.01 2C6.04 2 2 6.04 2 11.01s4.04 9.01 9.01 9.01 9.01-4.04 9.01-9.01S15.98 2 11.01 2Zm2.49 9.75h-1.75v1.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.75H8.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.75V8.5c0-.41.34-.75.75-.75s.75.34.75.75v1.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75Zm8.49 7.2c-.33-.61-1.03-.95-1.97-.95-.71 0-1.32.29-1.68.79s-.44 1.17-.22 1.84c.43 1.3 1.18 1.59 1.59 1.64.06.01.12.01.19.01.44 0 1.12-.19 1.78-1.18.53-.77.63-1.54.31-2.15Z"/>
    </svg>
  );
}
