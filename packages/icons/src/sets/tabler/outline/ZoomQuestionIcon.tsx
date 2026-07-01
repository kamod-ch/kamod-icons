import type { IconProps } from "../../../shared/types";

export function ZoomQuestionIcon({
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
      <path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6m-5-2v.01"/><path d="M10 10a1.5 1.5 0 1 0-1.14-2.474"/>
    </svg>
  );
}
