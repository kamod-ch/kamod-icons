import type { IconProps } from "../../../shared/types";

export function WifiIcon({
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
      <path fill="currentColor" d="M1.536 9.025C4.185 6.32 7.886 4.75 12 4.75s7.815 1.571 10.464 4.275a.75.75 0 0 0 1.072-1.05C20.595 4.974 16.504 3.25 12 3.25S3.405 4.974.464 7.975a.75.75 0 0 0 1.072 1.05Z"/><path fill="currentColor" d="M5.015 12.543a10.126 10.126 0 0 1 13.97.002.75.75 0 1 0 1.03-1.09 11.626 11.626 0 0 0-16.03-.002.75.75 0 0 0 1.03 1.09Zm3.748 3.505c.864-.81 1.944-1.298 3.237-1.298s2.373.488 3.237 1.297a.75.75 0 1 0 1.026-1.094C15.146 13.907 13.707 13.25 12 13.25s-3.146.657-4.263 1.703a.75.75 0 0 0 1.026 1.095ZM12 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/>
    </svg>
  );
}
