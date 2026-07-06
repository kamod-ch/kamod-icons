import type { IconProps } from "../../../shared/types";

export function ArrowAutofitLeftIcon({
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
      <path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8m0 4H3m3-3-3 3 3 3"/>
    </svg>
  );
}
