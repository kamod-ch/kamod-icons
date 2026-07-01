import type { IconProps } from "../../../shared/types";

export function EmpathizeOffIcon({
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
      <path d="M12 8a2.5 2.5 0 1 0-2.5-2.5m2.817 6.815-.317.317-.728-.727a3.088 3.088 0 1 0-4.367 4.367L12 21.368l4.689-4.69m1.324-2.673a3.087 3.087 0 0 0-3.021-3.018M3 3l18 18"/>
    </svg>
  );
}
