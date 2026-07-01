import type { IconProps } from "../../../shared/types";

export function FileTypeZipIcon({
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4m-3 6h1.5a1.5 1.5 0 0 0 0-3H16v6m-4-6v6m-7-6h3l-3 6h3"/>
    </svg>
  );
}
