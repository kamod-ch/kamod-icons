import type { IconProps } from "../../../shared/types";

export function ArrowBearRightIcon({
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
      <path d="M12 3h5v5"/><path d="m17 3-7.536 7.536A5 5 0 0 0 8 14.07V21"/>
    </svg>
  );
}
