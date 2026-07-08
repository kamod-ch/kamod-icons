import type { IconProps } from "../../../shared/types";

export function Tuning2Icon({
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
      <path fill="currentColor" d="M9.25 14a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5-10a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5.5 2.209a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5zm6 10a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM1 16.959a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Zm20.75-10.75a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1 0-1.5z"/>
    </svg>
  );
}
