import type { IconProps } from "../../../shared/types";

export function Files2Icon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="m13.04 4.293-2.667-2.666a1 1 0 0 0-.706-.294H4.333A2.336 2.336 0 0 0 2 3.667V13a2.336 2.336 0 0 0 2.333 2.333h4a1 1 0 0 0 0-2h-4A.333.333 0 0 1 4 13V3.667c0-.184.15-.334.333-.334h4.334V5a1 1 0 0 0 1 1h1.666v.333a1 1 0 0 0 2 0V5a1 1 0 0 0-.293-.707Z"/><path d="M21.707 11.627 19.04 8.96a1 1 0 0 0-.707-.293H13A2.336 2.336 0 0 0 10.667 11v9.333A2.336 2.336 0 0 0 13 22.667h6.667A2.336 2.336 0 0 0 22 20.333v-8a1 1 0 0 0-.293-.706Zm-1.122 1.706H18a.667.667 0 0 1-.667-.666V10.08z"/></g>
    </svg>
  );
}
