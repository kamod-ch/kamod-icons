import type { IconProps } from "../../../shared/types";

export function TypographyOffIcon({
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
      <path d="M4 20h3m7 0h6M6.9 15h6.9m-.8-2 3 7M5 20 9.09 9.094m1.091-2.911L11 4h2l3.904 8.924M3 3l18 18"/>
    </svg>
  );
}
