import type { IconProps } from "../../../shared/types";

export function PlugIcon({
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
      <path fill="currentColor" d="M8.75 1.25A.75.75 0 0 1 9.5 2v3.75H8V2a.75.75 0 0 1 .75-.75Z"/><path fill="currentColor" fillRule="evenodd" d="M4.75 12V8.25H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5h-.75V12a7.25 7.25 0 0 1-6.5 7.212V22a.75.75 0 0 1-1.5 0v-2.788A7.25 7.25 0 0 1 4.75 12Zm13-3.75H6.25V12a5.75 5.75 0 0 0 11.5 0z" clipRule="evenodd"/><path fill="currentColor" d="M16 2a.75.75 0 0 0-1.5 0v3.75H16z"/>
    </svg>
  );
}
