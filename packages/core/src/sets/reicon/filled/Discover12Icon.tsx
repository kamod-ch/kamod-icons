import type { IconProps } from "../../../shared/types";

export function Discover12Icon({
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
      <path fill="currentColor" d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2Zm-1.5 14.13c-1.45 0-2.62-1.18-2.62-2.62 0-3.1 2.52-5.62 5.62-5.62 1.45 0 2.62 1.18 2.62 2.62 0 3.09-2.52 5.62-5.62 5.62Z"/>
    </svg>
  );
}
