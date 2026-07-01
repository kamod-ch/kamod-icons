import type { IconProps } from "../../../shared/types";

export function PlaneOffIcon({
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
      <path d="M9.788 5.758 9 3h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h3M3 3l18 18"/>
    </svg>
  );
}
