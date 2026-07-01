import type { IconProps } from "../../../shared/types";

export function LabelOffIcon({
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
      <path d="M7 7H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10.52a1 1 0 0 0 .394-.081m1.86-2.137L21 12l-3.7-4.625A1 1 0 0 0 16.52 7H11M3 3l18 18"/>
    </svg>
  );
}
