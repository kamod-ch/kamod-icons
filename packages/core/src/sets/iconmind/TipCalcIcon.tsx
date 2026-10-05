import type { IconProps } from "../../shared/types";

export function TipCalcIcon({
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
      <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M22 9.5h-7v5h7m-16-5a1 1 0 1 0 2 0 1 1 0 1 0-2 0m.5 5 5-5m-1.5 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/>
    </svg>
  );
}
