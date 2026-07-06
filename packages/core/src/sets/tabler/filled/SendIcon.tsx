import type { IconProps } from "../../../shared/types";

export function SendIcon({
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
      <path d="M21.864 3.549 15.41 21.417a1.55 1.55 0 0 1-1.41.903 1.54 1.54 0 0 1-1.394-.874l-2.88-5.759zM20.45 2.135 8.311 14.273l-5.728-2.864A1.55 1.55 0 0 1 1.68 10c0-.606.353-1.157.981-1.44z"/>
    </svg>
  );
}
