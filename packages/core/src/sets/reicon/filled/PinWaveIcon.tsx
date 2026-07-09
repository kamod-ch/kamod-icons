import type { IconProps } from "../../../shared/types";

export function PinWaveIcon({
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
      <path fill="currentColor" d="M12 22c5.523 0 10-2.014 10-4.5 0-1.266-1.163-2.41-3.035-3.229-1.142 2.096-2.883 3.903-5.095 4.848a4.78 4.78 0 0 1-3.74 0c-2.212-.945-3.953-2.752-5.095-4.847C3.163 15.089 2 16.234 2 17.5 2 19.986 6.477 22 12 22Z"/><path fill="currentColor" fillRule="evenodd" d="M5 8.515C5 4.917 8.134 2 12 2s7 2.917 7 6.515c0 3.57-2.234 7.735-5.72 9.225a3.28 3.28 0 0 1-2.56 0C7.234 16.25 5 12.084 5 8.515ZM12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"/>
    </svg>
  );
}
