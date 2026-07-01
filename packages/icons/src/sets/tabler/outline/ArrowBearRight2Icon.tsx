import type { IconProps } from "../../../shared/types";

export function ArrowBearRight2Icon({
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
      <path d="M15 3h5v5"/><path d="m20 3-7.536 7.536A5 5 0 0 0 11 14.07V21M4 5l4.5 4.5"/>
    </svg>
  );
}
