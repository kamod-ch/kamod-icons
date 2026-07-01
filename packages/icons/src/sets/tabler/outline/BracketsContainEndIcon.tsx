import type { IconProps } from "../../../shared/types";

export function BracketsContainEndIcon({
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
      <path d="M14 4h4v16h-4m-9-4h.01M9 16h.01M13 16h.01"/>
    </svg>
  );
}
