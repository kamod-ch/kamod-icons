import type { IconProps } from "../../shared/types";

export function CoalPlantIcon({
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
      <path d="M5 20v-8h5v8Zm8 0v-5h5v5Zm-5.5-8a2.5 2.5 0 0 1 0-5m0-5a2.5 2.5 0 0 1 0 5"/>
    </svg>
  );
}
