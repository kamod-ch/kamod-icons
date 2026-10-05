import type { IconProps } from "../../shared/types";

export function PrefilterIcon({
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
      <path d="M3 3h18l-7 7v5h-4v-5Z"/><path d="M12.5 17.5a3 3 0 1 0 6 0 3 3 0 1 0-6 0M18 20l2 2"/>
    </svg>
  );
}
