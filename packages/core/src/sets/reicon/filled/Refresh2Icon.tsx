import type { IconProps } from "../../../shared/types";

export function Refresh2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M12.04 16.293a1 1 0 1 0-1.414 1.414l1.61 1.61c-.079.003-.156.016-.236.016-4.043 0-7.333-3.29-7.333-7.333 0-2.01.793-3.884 2.234-5.274a1 1 0 0 0-1.389-1.44A9.25 9.25 0 0 0 2.667 12c0 5.014 3.976 9.105 8.94 9.313l-.98.98a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414zm.354-13.606.98-.98A1 1 0 1 0 11.96.293l-3 3a1 1 0 0 0 0 1.414l3 3a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.61-1.61c.079-.003.157-.016.236-.016 4.044 0 7.333 3.29 7.333 7.333 0 2-.795 3.873-2.237 5.274a1 1 0 1 0 1.393 1.435A9.28 9.28 0 0 0 21.334 12c0-5.014-3.977-9.105-8.94-9.313Z"/>
    </svg>
  );
}
