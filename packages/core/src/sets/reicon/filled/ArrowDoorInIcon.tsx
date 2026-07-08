import type { IconProps } from "../../../shared/types";

export function ArrowDoorInIcon({
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
      <g fill="currentColor" strokeWidth="1.333"><path d="M19.667 2H11a2.336 2.336 0 0 0-2.333 2.333v2.688a1 1 0 0 0 2 0V4.333c0-.184.15-.333.333-.333h7.07l-2.3 1.425a2.32 2.32 0 0 0-1.103 1.983v9.183c0 .813.413 1.554 1.104 1.982L18.069 20H11a.333.333 0 0 1-.333-.334V16.98a1 1 0 0 0-2 0v2.686A2.336 2.336 0 0 0 11 22h8.667A2.336 2.336 0 0 0 22 19.665V4.333A2.336 2.336 0 0 0 19.667 2Z"/><path d="M9.707 11.293 6.04 7.627A1 1 0 1 0 4.625 9.04L6.585 11H1a1 1 0 0 0 0 2h5.585l-1.96 1.96a1 1 0 0 0 1.414 1.415l3.666-3.667a1 1 0 0 0 0-1.414z"/></g>
    </svg>
  );
}
