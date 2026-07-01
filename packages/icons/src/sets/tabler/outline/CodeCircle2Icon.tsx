import type { IconProps } from "../../../shared/types";

export function CodeCircle2Icon({
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
      <path d="M8.5 13.5 7 12l1.5-1.5m7 0L17 12l-1.5 1.5"/><path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0m10-2.5L11 15"/>
    </svg>
  );
}
