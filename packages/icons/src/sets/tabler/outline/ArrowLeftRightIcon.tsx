import type { IconProps } from "../../../shared/types";

export function ArrowLeftRightIcon({
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
      <path d="m17 13 4-4-4-4M7 13 3 9l4-4"/><path d="M12 14a5 5 0 0 1 5-5h4m-9 10v-5a5 5 0 0 0-5-5H3"/>
    </svg>
  );
}
