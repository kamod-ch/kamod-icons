import type { IconProps } from "../../../shared/types";

export function ShareOffIcon({
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
      <path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0m12-6a3 3 0 1 0 6 0 3 3 0 1 0-6 0m.861 9.896a3 3 0 0 0 4.265 4.22m.578-3.417a3 3 0 0 0-1.507-1.45M8.7 10.7l1.336-.688M12.66 8.66 15.3 7.3m-6.6 6 6.6 3.4M3 3l18 18"/>
    </svg>
  );
}
