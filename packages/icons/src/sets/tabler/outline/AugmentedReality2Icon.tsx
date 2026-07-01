import type { IconProps } from "../../../shared/types";

export function AugmentedReality2Icon({
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
      <path d="M10 21H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3.5"/><path d="m17 17-4-2.5 4-2.5 4 2.5V19l-4 2.5z"/><path d="M13 14.5V19l4 2.5m0-4.5 4-2.5M11 4h2"/>
    </svg>
  );
}
