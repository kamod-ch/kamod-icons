import type { IconProps } from "../../shared/types";

export function FaultInjectionIcon({
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
      <path d="M9 3v7l-5 5v4h16v-4l-5-5V3Zm3 8.5v4"/><path d="m9.5 13 2.5 2.5 2.5-2.5"/>
    </svg>
  );
}
