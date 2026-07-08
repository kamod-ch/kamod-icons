import type { IconProps } from "../../../shared/types";

export function ComputerIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M3.67 19.663a1 1 0 0 1-.793-.39.995.995 0 0 1 .174-1.393c.062-.05 1.576-1.213 3.949-1.213a1 1 0 0 1 0 2c-1.656 0-2.713.784-2.724.792a1 1 0 0 1-.605.204ZM19.667 2.667h-7.334c-1.653 0-3 1.345-3 3v12.666c0 1.655 1.347 3 3 3h7.334c1.653 0 3-1.345 3-3V5.667c0-1.655-1.347-3-3-3ZM16 17.333a1.334 1.334 0 1 1 0-2.667 1.334 1.334 0 0 1 0 2.667ZM17.667 12h-3.334a1 1 0 0 1 0-2h3.334a1 1 0 0 1 0 2Zm0-3.333h-3.334a1 1 0 0 1 0-2h3.334a1 1 0 0 1 0 2Z"/><path fillRule="evenodd" d="M3.667 6.667A.334.334 0 0 0 3.333 7v6c0 .184.15.333.334.333h2.666a1 1 0 0 1 0 2H3.667A2.334 2.334 0 0 1 1.333 13V7a2.334 2.334 0 0 1 2.334-2.333h2.666a1 1 0 0 1 0 2z" clipRule="evenodd"/></g>
    </svg>
  );
}
