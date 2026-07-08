import type { IconProps } from "../../../shared/types";

export function Bomb3Icon({
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
      <path fill="currentColor" d="M15.665 2.83a.75.75 0 0 1 1.006.335l.5 1a.75.75 0 1 1-1.342.67l-.5-1a.75.75 0 0 1 .336-1.006Zm3.165 4.335a.75.75 0 0 1 1.005-.336l1 .5a.75.75 0 1 1-.67 1.342l-1-.5a.75.75 0 0 1-.336-1.006Zm1.7-2.635a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm.53-6.97-1.158 1.16a9 9 0 0 0-1.06-1.061L16.47 6.47a.75.75 0 1 1 1.06 1.06Z"/>
    </svg>
  );
}
