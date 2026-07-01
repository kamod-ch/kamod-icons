import type { IconProps } from "../../../shared/types";

export function ArrowRampRight2Icon({
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
      <path d="M6 3v8.707M16 14l4-4-4-4"/><path d="M6 21c0-6.075 4.925-11 11-11h3"/>
    </svg>
  );
}
