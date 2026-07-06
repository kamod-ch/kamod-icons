import type { IconProps } from "../../shared/types";

export function CalendarPlus2Icon({
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
      <path d="M8 2v4m8-4v4"/><rect x="3" y="4" rx="2"/><path d="M3 10h18m-11 6h4m-2-2v4"/>
    </svg>
  );
}
