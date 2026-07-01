import type { IconProps } from "../../../shared/types";

export function ArrowBearLeftIcon({
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
      <path d="M13 3H8v5"/><path d="m8 3 7.536 7.536A5 5 0 0 1 17 14.07V21"/>
    </svg>
  );
}
