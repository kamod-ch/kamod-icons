import type { IconProps } from "../../../shared/types";

export function EscalatorIcon({
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
      <path d="M19.5 4a3.5 3.5 0 0 1 0 7h-1.086l-8.12 8.121a3 3 0 0 1-1.924.872L8.172 20H4.5a3.5 3.5 0 0 1 0-7h2.084l8.123-8.121a3 3 0 0 1 1.923-.872L16.828 4z"/>
    </svg>
  );
}
