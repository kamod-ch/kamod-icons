import type { IconProps } from "../../../shared/types";

export function CircleHashtagIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M10.601 13.333H12.9l.5-2.666h-2.3z"/><path d="M12 1.333C6.119 1.333 1.333 6.12 1.333 12S6.12 22.667 12 22.667 22.667 17.88 22.667 12 17.88 1.333 12 1.333Zm5.333 9.334h-1.898l-.5 2.666h1.398a1 1 0 0 1 0 2H14.56l-.41 2.184a1 1 0 0 1-1.966-.368l.34-1.816h-2.299l-.41 2.184a1 1 0 0 1-1.966-.368l.34-1.816H6.664a1 1 0 0 1 0-2h1.899l.5-2.666H7.664a1 1 0 0 1 0-2h1.775l.409-2.184a1.002 1.002 0 0 1 1.967.368l-.34 1.816h2.298l.41-2.184a1.002 1.002 0 0 1 1.967.368l-.34 1.816h1.523a1 1 0 0 1 0 2Z"/></g>
    </svg>
  );
}
