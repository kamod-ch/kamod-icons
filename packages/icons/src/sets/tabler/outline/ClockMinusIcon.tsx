import type { IconProps } from "../../../shared/types";

export function ClockMinusIcon({
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
      <path d="M20.477 15.022a9 9 0 1 0-7.998 5.965"/><path d="M12 7v5l3 3m1 4h6"/>
    </svg>
  );
}
