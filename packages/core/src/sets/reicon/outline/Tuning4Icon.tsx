import type { IconProps } from "../../../shared/types";

export function Tuning4Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M16.75 4a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM14 5.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm-2 9.5a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM10.75 12a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0ZM10 22.75a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5ZM8.75 20a1.25 1.25 0 1 0 2.5 0 1.25 1.25 0 0 0-2.5 0Z" clipRule="evenodd"/><path fill="currentColor" d="M15.25 12a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75ZM14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75ZM5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75ZM19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"/>
    </svg>
  );
}
