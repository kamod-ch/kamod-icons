import type { IconProps } from "../../../shared/types";

export function ChairDirectorIcon({
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
      <path d="m6 21 12-9M6 12l12 9M5 12h14M6 3v9m12-9v9M6 8h12M6 5h12"/>
    </svg>
  );
}
