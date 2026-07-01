import type { IconProps } from "../../../shared/types";

export function CircleMinus2Icon({
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
      <path d="M20.475 15.029a9 9 0 1 0-7.962 5.957M16 19h6"/>
    </svg>
  );
}
