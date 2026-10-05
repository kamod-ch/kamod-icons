import type { IconProps } from "../../shared/types";

export function BirthdayCandleIcon({
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
      <path d="M8 21V11h8v10Zm0-6h8m-4-6c-2.5-2-2.5-5 0-7 2.5 2 2.5 5 0 7"/>
    </svg>
  );
}
