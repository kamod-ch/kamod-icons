import type { IconProps } from "../../../shared/types";

export function PuzzleIcon({
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
      <path fill="currentColor" d="M10 1.5a2.75 2.75 0 0 0-2.75 2.75V6H4a2.5 2.5 0 0 0-2.5 2.5v2.75a.5.5 0 0 0 .5.5h2.25a1.75 1.75 0 1 1 0 3.5H2a.5.5 0 0 0-.5.5V20A2.5 2.5 0 0 0 4 22.5h3.75a.5.5 0 0 0 .5-.5v-2.25a1.75 1.75 0 1 1 3.5 0V22a.5.5 0 0 0 .5.5h3.25A2.5 2.5 0 0 0 18 20v-3.75h1.75a2.75 2.75 0 1 0 0-5.5H18V8.5A2.5 2.5 0 0 0 15.5 6h-2.75V4.25A2.75 2.75 0 0 0 10 1.5Z"/>
    </svg>
  );
}
