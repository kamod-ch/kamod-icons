import type { IconProps } from "../../../shared/types";

export function TimeDuration30Icon({
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
      <path d="M14 10.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M8 9h1.5a1.5 1.5 0 0 1 0 3H9h.5a1.5 1.5 0 0 1 0 3H8m-5-3v.01M7.5 4.2v.01m0 15.59v.01M4.2 16.5v.01m0-9.01v.01"/><path d="M12 21a9 9 0 0 0 0-18"/>
    </svg>
  );
}
