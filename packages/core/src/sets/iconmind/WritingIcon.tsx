import type { IconProps } from "../../shared/types";

export function WritingIcon({
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
      <path d="M6 13 16 3l3 3L9 16Z"/><path d="m6 13-2 2v3h3l2-2m-6 5h18"/>
    </svg>
  );
}
