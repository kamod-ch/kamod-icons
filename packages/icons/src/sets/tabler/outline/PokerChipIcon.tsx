import type { IconProps } from "../../../shared/types";

export function PokerChipIcon({
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
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/><path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m5-9v4m0 10v4m-9-9h4m10 0h4m-2.636-6.364-2.828 2.828m-7.072 7.072-2.828 2.828m0-12.728 2.828 2.828m7.072 7.072 2.828 2.828"/>
    </svg>
  );
}
