import type { IconProps } from "../../shared/types";

export function RelaxIcon({
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
      <path d="M12 6c3 3 3 7 0 10-3-3-3-7 0-10"/><path d="M12 16c-4 0-7-3-7-6 4 0 7 3 7 6m0 0c4 0 7-3 7-6-4 0-7 3-7 6m-8 4h16"/>
    </svg>
  );
}
