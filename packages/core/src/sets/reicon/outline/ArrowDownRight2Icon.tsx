import type { IconProps } from "../../../shared/types";

export function ArrowDownRight2Icon({
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
      <path fill="currentColor" d="M19 19.75a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-1.5 0v6.19L5.53 4.47a.75.75 0 0 0-1.06 1.06l12.72 12.72H11a.75.75 0 0 0 0 1.5z"/>
    </svg>
  );
}
