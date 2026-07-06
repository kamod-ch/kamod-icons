import type { IconProps } from "../../../shared/types";

export function Filter2QuestionIcon({
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
      <path d="M4 6h16M6 12h10.5M9 18h5m5 4v.01M19 19a2 2 0 0 0 1.941-1.532 2.006 2.006 0 0 0-1.027-2.25 1.98 1.98 0 0 0-2.414.483"/>
    </svg>
  );
}
