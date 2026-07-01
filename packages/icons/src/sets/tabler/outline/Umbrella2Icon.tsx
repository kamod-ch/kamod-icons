import type { IconProps } from "../../../shared/types";

export function Umbrella2Icon({
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
      <path d="M5.343 7.343a8 8 0 1 1 11.314 11.314zm5.485 5.997-4.242 4.243a2 2 0 1 0 2.828 2.828"/>
    </svg>
  );
}
