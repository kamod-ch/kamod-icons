import type { IconProps } from "../../../shared/types";

export function LemonIcon({
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
      <path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z"/><path d="M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192m-4.597 4.596 4.597 4.597m-4.597-4.597v6.364m0-6.364h6.364"/>
    </svg>
  );
}
