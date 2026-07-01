import type { IconProps } from "../../../shared/types";

export function Math1Divide3Icon({
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
      <path d="M10 15.5a.5.5 0 0 1 .5-.5h2a1.5 1.5 0 0 1 0 3h-1.167H12.5a1.5 1.5 0 0 1 0 3h-2a.5.5 0 0 1-.5-.5M5 12h14m-9-7 2-2v6"/>
    </svg>
  );
}
