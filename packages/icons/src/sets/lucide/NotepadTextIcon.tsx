import type { IconProps } from "../../shared/types";

export function NotepadTextIcon({
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
      <path d="M8 2v4m4-4v4m4-4v4"/><rect x="4" y="4" rx="2"/><path d="M8 10h6m-6 4h8m-8 4h5"/>
    </svg>
  );
}
