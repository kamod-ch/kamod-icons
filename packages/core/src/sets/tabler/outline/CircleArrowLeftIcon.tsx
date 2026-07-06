import type { IconProps } from "../../../shared/types";

export function CircleArrowLeftIcon({
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
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18m-4-9 4 4m-4-4h8m-4-4-4 4"/>
    </svg>
  );
}
