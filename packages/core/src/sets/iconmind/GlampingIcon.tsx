import type { IconProps } from "../../shared/types";

export function GlampingIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M2 16 12 6l10 10Z"/><path d="m12 10.5 2 2-2 2-2-2ZM4 19h16"/>
    </svg>
  );
}
