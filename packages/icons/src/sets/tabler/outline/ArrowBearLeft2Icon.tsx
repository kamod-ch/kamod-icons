import type { IconProps } from "../../../shared/types";

export function ArrowBearLeft2Icon({
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
      <path d="M9 3H4v5"/><path d="m4 3 7.536 7.536A5 5 0 0 1 13 14.07V21m7-16-4.5 4.5"/>
    </svg>
  );
}
