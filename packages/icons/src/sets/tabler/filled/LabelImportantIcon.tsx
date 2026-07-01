import type { IconProps } from "../../../shared/types";

export function LabelImportantIcon({
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
      <path d="M16.52 6a2 2 0 0 1 1.561.75l3.7 4.625a1 1 0 0 1 0 1.25l-3.7 4.624A2 2 0 0 1 16.52 18H4a1 1 0 0 1-.78-1.625L6.72 12l-3.5-4.375a1 1 0 0 1 .668-1.62L4 6z"/>
    </svg>
  );
}
