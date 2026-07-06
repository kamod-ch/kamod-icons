import type { IconProps } from "../../shared/types";

export function KayakIcon({
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
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2zm2.97-13.39a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61M6.707 6.707l10.586 10.586M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z"/>
    </svg>
  );
}
