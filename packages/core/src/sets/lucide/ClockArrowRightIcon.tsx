import type { IconProps } from "../../shared/types";

export function ClockArrowRightIcon({
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
      <path d="M12 6v6l2 1"/><path d="M13.5 21.885A10 10 0 1 1 22 12m-8 6h8"/><path d="m18 22 4-4-4-4"/>
    </svg>
  );
}
