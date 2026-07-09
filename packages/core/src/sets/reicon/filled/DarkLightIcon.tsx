import type { IconProps } from "../../../shared/types";

export function DarkLightIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 16V8a4 4 0 1 0 0 8Zm0-8a4 4 0 1 1 0 8v5.667c5.339 0 9.667-4.328 9.667-9.667S17.339 2.333 12 2.333z"/><path d="M12 1.333c5.881 0 10.667 4.786 10.667 10.667S17.88 22.667 12 22.667 1.333 17.88 1.333 12 6.12 1.333 12 1.333Zm0 19.334c4.779 0 8.667-3.888 8.667-8.667S16.779 3.333 12 3.333 3.333 7.221 3.333 12 7.221 20.667 12 20.667Z"/></g>
    </svg>
  );
}
