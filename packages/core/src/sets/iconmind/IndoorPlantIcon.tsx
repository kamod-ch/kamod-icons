import type { IconProps } from "../../shared/types";

export function IndoorPlantIcon({
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
      <path d="M9 16v5h6v-5Zm3-8v8m0-4c-3 0-5-2-5-5 3 0 5 2 5 5m0-2c3 0 5-2 5-5-3 0-5 2-5 5"/>
    </svg>
  );
}
