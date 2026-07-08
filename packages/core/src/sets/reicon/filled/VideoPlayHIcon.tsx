import type { IconProps } from "../../../shared/types";

export function VideoPlayHIcon({
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
      <path fill="currentColor" d="M11.25 2c-1.366.001-2.519.01-3.5.068V6.25h3.5zm-5 .221c-1.223.195-2.101.56-2.786 1.243-.684.684-1.048 1.563-1.242 2.786H6.25z"/><path fill="currentColor" fillRule="evenodd" d="M2 12c0-1.7 0-3.094.069-4.25H21.93C22 8.906 22 10.3 22 12s0 3.094-.069 4.25H2.07C2 15.094 2 13.7 2 12Zm10.411-1.596C13.471 11.116 14 11.472 14 12s-.53.884-1.589 1.596c-1.073.721-1.61 1.082-2.01.817C10 14.148 10 13.433 10 12s0-2.148.4-2.413.938.096 2.011.817Z" clipRule="evenodd"/><path fill="currentColor" d="M21.778 6.25c-.194-1.223-.558-2.102-1.242-2.786s-1.563-1.048-2.786-1.243V6.25zM12.75 2c1.366.001 2.519.01 3.5.068V6.25h-3.5zm9.028 15.75H17.75v4.028c1.223-.194 2.102-.559 2.785-1.243.685-.684 1.05-1.562 1.243-2.785Zm-5.528 0v4.181c-.981.058-2.134.067-3.5.069v-4.25zm-5 4.25v-4.25h-3.5v4.181c.981.058 2.134.067 3.5.069Zm-5-4.25v4.028c-1.223-.194-2.101-.559-2.786-1.243-.684-.684-1.048-1.562-1.242-2.785z"/>
    </svg>
  );
}
