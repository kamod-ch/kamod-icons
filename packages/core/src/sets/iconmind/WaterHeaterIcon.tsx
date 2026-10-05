import type { IconProps } from "../../shared/types";

export function WaterHeaterIcon({
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
      <path d="M7 8a5 5 0 0 1 10 0v9a5 5 0 0 1-10 0Zm0 5h10M3 5h5m8 15h5"/>
    </svg>
  );
}
