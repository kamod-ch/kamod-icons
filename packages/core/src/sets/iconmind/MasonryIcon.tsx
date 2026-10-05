import type { IconProps } from "../../shared/types";

export function MasonryIcon({
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
      <path d="M2 4a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm11.5 0a2 2 0 0 1 2-2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4.5a2 2 0 0 1-2-2ZM2 15a2 2 0 0 1 2-2h4.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Zm11.5 4.5A2.5 2.5 0 0 1 16 17h3.5a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5H16a2.5 2.5 0 0 1-2.5-2.5"/>
    </svg>
  );
}
