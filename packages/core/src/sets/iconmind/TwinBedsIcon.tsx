import type { IconProps } from "../../shared/types";

export function TwinBedsIcon({
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
      <path d="M2 18v-7h8v7m-8-4h8m-7-3V8.5h3.5V11m7.5 7v-7h8v7m-8-4h8m-7-3V8.5h3.5V11"/>
    </svg>
  );
}
