import type { IconProps } from "../../../shared/types";

export function Grid82Icon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" d="M22 7.811v3.44h-5.25v-9.22c3.3.2 5.25 2.33 5.25 5.78Zm0 4.939v3.44c0 3.45-1.95 5.58-5.25 5.78v-9.22zm-14.75 0v9.22C3.95 21.77 2 19.64 2 16.19v-3.44zm0-10.719v9.22H2v-3.44c0-3.45 1.95-5.58 5.25-5.78Zm8-.031h-6.5v9.25h6.5zm0 10.75h-6.5V22h6.5z"/>
    </svg>
  );
}
