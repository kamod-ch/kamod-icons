import type { IconProps } from "../../shared/types";

export function CreditNoteIcon({
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
      <path d="M6 2h12a2 2 0 0 1 2 2v15l-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2V4a2 2 0 0 1 2-2m3 8h6"/>
    </svg>
  );
}
