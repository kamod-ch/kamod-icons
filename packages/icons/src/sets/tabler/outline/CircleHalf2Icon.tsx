import type { IconProps } from "../../../shared/types";

export function CircleHalf2Icon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m9-9v18m0-7 7-7m-7 12 8.5-8.5M12 9l4.5-4.5"/>
    </svg>
  );
}
