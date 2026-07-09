import type { IconProps } from "../../../shared/types";

export function LoaderIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M12 6.667a1 1 0 0 1-1-1V2.333a1 1 0 0 1 2 0v3.334a1 1 0 0 1-1 1Z"/><path d="M16.479 8.521a1 1 0 0 1-.707-1.708l2.357-2.357a1 1 0 1 1 1.415 1.415l-2.357 2.357a1 1 0 0 1-.707.293Z" opacity=".88"/><path d="M21.667 13h-3.334a1 1 0 0 1 0-2h3.334a1 1 0 0 1 0 2Z" opacity=".75"/><path d="M18.835 19.835a1 1 0 0 1-.707-.294l-2.357-2.357a1 1 0 1 1 1.414-1.415l2.358 2.358a1 1 0 0 1-.707 1.708Z" opacity=".63"/><path d="M12 22.667a1 1 0 0 1-1-1v-3.334a1 1 0 0 1 2 0v3.334a1 1 0 0 1-1 1Z" opacity=".5"/><path d="M5.165 19.835a1 1 0 0 1-.707-1.708l2.358-2.358a1 1 0 1 1 1.415 1.415l-2.358 2.357a1 1 0 0 1-.706.294Z" opacity=".38"/><path d="M5.667 13H2.333a1 1 0 0 1 0-2h3.334a1 1 0 0 1 0 2Z" opacity=".25"/><path d="M7.521 8.521a1 1 0 0 1-.706-.293L4.457 5.871a1 1 0 1 1 1.415-1.415l2.357 2.357a1 1 0 0 1-.706 1.708Z" opacity=".13"/></g>
    </svg>
  );
}
