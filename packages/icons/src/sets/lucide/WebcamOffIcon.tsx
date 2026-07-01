import type { IconProps } from "../../shared/types";

export function WebcamOffIcon({
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
      <path d="M12 22v-4m.754-10.904a3 3 0 0 1 2.15 2.15m-2.041 3.627a3 3 0 0 1-3.736-3.735"/><path d="M16.566 16.57A8 8 0 0 1 5.43 5.433M2 2l20 20M7 22h10M8.478 2.817a8 8 0 0 1 10.705 10.705"/>
    </svg>
  );
}
