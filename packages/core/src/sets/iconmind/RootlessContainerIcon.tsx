import type { IconProps } from "../../shared/types";

export function RootlessContainerIcon({
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
      <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3-2v14"/><path d="M11.5 10.5a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9.5 16.5a4 4 0 0 1 8 0"/>
    </svg>
  );
}
