import type { IconProps } from "../../shared/types";

export function GuitarIcon({
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
      <path d="M12 21c-3.5 0-6-2-6-4.5 0-3 2.5-4 3-5.5h6c.5 1.5 3 2.5 3 5.5 0 2.5-2.5 4.5-6 4.5"/><path d="M10 16.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 5v6m-2-6V2h4v3Z"/>
    </svg>
  );
}
