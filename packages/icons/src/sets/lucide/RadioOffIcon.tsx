import type { IconProps } from "../../shared/types";

export function RadioOffIcon({
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
      <path d="M13.414 13.414a2 2 0 1 1-2.828-2.828m5.661-2.825a6 6 0 0 1 1.744 4.572m1.084-7.4a10 10 0 0 1 2.234 10.72M2 2l20 20M4.925 19.067a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478"/>
    </svg>
  );
}
