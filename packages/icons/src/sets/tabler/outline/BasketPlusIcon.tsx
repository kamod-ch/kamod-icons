import type { IconProps } from "../../../shared/types";

export function BasketPlusIcon({
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
      <path d="m17 10-2-6m-8 6 2-6m3 16H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.359 2.043"/><path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m6 5h6m-3-3v6"/>
    </svg>
  );
}
