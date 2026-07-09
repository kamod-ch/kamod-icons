import type { IconProps } from "../../../shared/types";

export function DesktopArrowDownIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M7.624 8.624c-.39.39-.388 1.025.003 1.416l3.666 3.667a1 1 0 0 0 1.414 0l3.666-3.667a1 1 0 1 0-1.414-1.415l-1.96 1.96V3.667a1 1 0 0 0-2 0v6.917l-1.96-1.96a1 1 0 0 0-1.415 0Z"/><path d="M18.999 2.667H16a1 1 0 0 0 0 2h3c.919 0 1.667.748 1.667 1.666v7.999A1.67 1.67 0 0 1 19 15.999H5a1.67 1.67 0 0 1-1.667-1.667V6.333c0-.918.748-1.666 1.667-1.666h3a1 1 0 0 0 0-2H5a3.67 3.67 0 0 0-3.667 3.666v7.999A3.67 3.67 0 0 0 5 17.999h6v1.373c-1.23.08-2.453.3-3.635.672a1 1 0 0 0 .602 1.908 13.5 13.5 0 0 1 8.065 0q.15.046.301.047a1 1 0 0 0 .3-1.954A15.3 15.3 0 0 0 13 19.373V18h6a3.67 3.67 0 0 0 3.666-3.667v-8A3.67 3.67 0 0 0 19 2.667Z"/></g>
    </svg>
  );
}
