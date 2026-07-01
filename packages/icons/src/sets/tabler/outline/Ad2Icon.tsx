import type { IconProps } from "../../../shared/types";

export function Ad2Icon({
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
      <path d="M11.933 5H5v16h13v-8m-4 4H9"/><path d="M9 13h5V9H9zm6-8V3m3 3 2-2m-1 5h2"/>
    </svg>
  );
}
