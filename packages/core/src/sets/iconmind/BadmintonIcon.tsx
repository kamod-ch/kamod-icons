import type { IconProps } from "../../shared/types";

export function BadmintonIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M12 20c-3 0-5-2-5-4h10c0 2-2 4-5 4m-5-4C5 12 4 7 3 3m14 13c2-4 3-9 4-13M3 3h18M9 4v11m6-11v11"/>
    </svg>
  );
}
