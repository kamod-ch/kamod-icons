import type { IconProps } from "../../../shared/types";

export function GenderTrasvestiIcon({
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
      <path d="M15 20a5 5 0 1 1 0-10 5 5 0 0 1 0 10M6 6l5.4 5.4M4 8l4-4"/>
    </svg>
  );
}
