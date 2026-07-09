import type { IconProps } from "../../../shared/types";

export function AngleUp2Icon({
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
      <path fill="currentColor" d="M6.47 14.53a.75.75 0 0 0 1.06 0L12 10.06l4.47 4.47a.75.75 0 1 0 1.06-1.06l-5-5a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06Z"/>
    </svg>
  );
}
