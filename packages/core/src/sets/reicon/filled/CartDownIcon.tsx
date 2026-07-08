import type { IconProps } from "../../../shared/types";

export function CartDownIcon({
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
      <path fill="currentColor" d="M2 1.25a.75.75 0 0 0 0 1.5h1.182a.75.75 0 0 1 .744.654l1.354 10.45c.046.354.158.684.323.98a2.501 2.501 0 0 0 .647 4.916h.395a2 2 0 1 0 3.71 0h6.29a2 2 0 1 0 3.71 0H21a.75.75 0 0 0 0-1.5H6.25a1 1 0 1 1 0-2h12.467a3.25 3.25 0 0 0 3.237-2.956l.793-8.726a.75.75 0 1 0-1.494-.136l-.793 8.726a1.75 1.75 0 0 1-1.743 1.592H8.007a1.25 1.25 0 0 1-1.24-1.09L5.414 3.21a2.25 2.25 0 0 0-2.231-1.96z"/><path fill="currentColor" d="M13.5 3.75a.75.75 0 0 1 .75.75v5.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V4.5a.75.75 0 0 1 .75-.75Z"/>
    </svg>
  );
}
