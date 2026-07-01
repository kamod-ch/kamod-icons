import type { IconProps } from "../../../shared/types";

export function HangerOffIcon({
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
      <path d="M14 6a2 2 0 1 0-4 0m6.506 6.506 3.461 1.922a2 2 0 0 1 1.029 1.749V17m-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749l6.673-3.707M3 3l18 18"/>
    </svg>
  );
}
