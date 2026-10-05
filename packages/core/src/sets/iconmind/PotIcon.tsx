import type { IconProps } from "../../shared/types";

export function PotIcon({
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
      <path d="M5 12v7h14v-7Zm3 0a4 4 0 0 1 8 0m-4-6.5V8M2 15h3m14 0h3"/>
    </svg>
  );
}
