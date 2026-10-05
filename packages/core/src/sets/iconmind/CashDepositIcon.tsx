import type { IconProps } from "../../shared/types";

export function CashDepositIcon({
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
      <path d="M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5-5.5h3L19 9m-7 3v6m-2.5-2.5L12 18l2.5-2.5"/>
    </svg>
  );
}
