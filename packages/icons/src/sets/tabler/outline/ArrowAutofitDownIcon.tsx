import type { IconProps } from "../../../shared/types";

export function ArrowAutofitDownIcon({
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
      <path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8m4 0v17m-3-3 3 3 3-3"/>
    </svg>
  );
}
