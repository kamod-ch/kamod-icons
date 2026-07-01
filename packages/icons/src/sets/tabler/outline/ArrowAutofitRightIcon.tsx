import type { IconProps } from "../../../shared/types";

export function ArrowAutofitRightIcon({
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
      <path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8m0 4h17m-3-3 3 3-3 3"/>
    </svg>
  );
}
