import type { IconProps } from "../../shared/types";

export function AnniversaryIcon({
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
      <path d="M12 17c-3-2-7-4.5-5.5-7.5 1.5-2 4-1 5.5 1 1.5-2 4-3 5.5-1C19 12.5 15 15 12 17"/><path d="M4 12a8 8 0 1 1 4 7"/><path d="m2 10 2 2 2-2"/>
    </svg>
  );
}
