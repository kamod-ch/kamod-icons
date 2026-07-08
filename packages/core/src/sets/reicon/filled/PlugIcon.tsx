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
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M8.75 1.25A.75.75 0 0 1 9.5 2v3.75H8V2a.75.75 0 0 1 .75-.75Zm6.5 0A.75.75 0 0 1 16 2v3.75h-1.5V2a.75.75 0 0 1 .75-.75Zm-4 17.71V22a.75.75 0 0 0 1.5 0v-3.04A7 7 0 0 0 19 12V8.25h1a.75.75 0 0 0 0-1.5H4a.75.75 0 1 0 0 1.5h1V12a7 7 0 0 0 6.25 6.96Z"/>
    </svg>
  );
}
