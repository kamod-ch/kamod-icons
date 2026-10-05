import type { IconProps } from "../../shared/types";

export function AnswerSynthesisIcon({
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
      <path d="M3 6h6m-6 6h6m-6 6h6M9 8l4 4m-4 4 4-4m0 0h8"/>
    </svg>
  );
}
