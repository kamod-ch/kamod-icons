import type { IconProps } from "../../shared/types";

export function MultipleChoiceIcon({
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
      <path d="M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0m7-12h9m-9 6h9m-9 6h6"/>
    </svg>
  );
}
