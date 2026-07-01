import type { IconProps } from "../../../shared/types";

export function AcrobaticIcon({
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
      <path d="M13.207 3 6.472 5.462a1 1 0 0 0-.364 1.646L8 9m2.5-.75L12 8h3.174a2 2 0 0 1 1.411.583L18.007 10M8 9c0 4.5 1.781 5.14 3 5.5m2.007 6.5h-1a1 1 0 0 1-1-1L11 14.5m1.007-.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/>
    </svg>
  );
}
