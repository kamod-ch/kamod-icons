import type { IconProps } from "../../shared/types";

export function RecycleIcon({
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
      <path d="m6 14 5-5h4"/><path d="M12.5 6.5 15 9l-2.5 2.5M18 14l-5 5H9"/><path d="M11.5 16.5 9 19l2.5 2.5M7 18l-4-4 4-4"/>
    </svg>
  );
}
