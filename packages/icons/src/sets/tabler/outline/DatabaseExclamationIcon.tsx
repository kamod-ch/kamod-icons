import type { IconProps } from "../../../shared/types";

export function DatabaseExclamationIcon({
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
      <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3"/><path d="M4 6v6c0 1.657 3.582 3 8 3 1.118 0 2.182-.086 3.148-.241M20 12V6"/><path d="M4 12v6c0 1.657 3.582 3 8 3 1.064 0 2.079-.078 3.007-.22M19 16v3m0 3v.01"/>
    </svg>
  );
}
