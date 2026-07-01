import type { IconProps } from "../../../shared/types";

export function BracketsContainStartIcon({
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
      <path d="M9 4H5v16h4m9-4h-.01M14 16h-.01M10 16h-.01"/>
    </svg>
  );
}
