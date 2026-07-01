import type { IconProps } from "../../../shared/types";

export function FileTypeXmlIcon({
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
      <path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l4 6m-4 0 4-6m11 0v6h3m-11 0v-6l2.5 3 2.5-3v6"/>
    </svg>
  );
}
