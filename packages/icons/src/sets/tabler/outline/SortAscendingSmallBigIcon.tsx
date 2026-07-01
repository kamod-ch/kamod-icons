import type { IconProps } from "../../../shared/types";

export function SortAscendingSmallBigIcon({
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
      <path d="m4 15 3 3 3-3M7 6v12m7-12.333c0-.369.298-.667.667-.667h2.666c.369 0 .667.298.667.667v2.666a.667.667 0 0 1-.667.667h-2.666A.667.667 0 0 1 14 8.333zm0 7.5c0-.645.522-1.167 1.167-1.167h4.666c.645 0 1.167.522 1.167 1.167v4.666c0 .645-.522 1.167-1.167 1.167h-4.666A1.167 1.167 0 0 1 14 17.833z"/>
    </svg>
  );
}
