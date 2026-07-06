import type { IconProps } from "../../../shared/types";

export function RouteSquare2Icon({
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
      <path d="M14 5a2 2 0 0 0-2 2v10a2 2 0 0 1-2 2m-7-2h4v4H3zM17 3h4v4h-4z"/>
    </svg>
  );
}
