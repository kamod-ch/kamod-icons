import type { IconProps } from "../../../shared/types";

export function JetpackIcon({
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
      <path d="M10 6a3 3 0 1 0-6 0v7h6zm4 7h6V6a3 3 0 0 0-6 0zm-9 3q0 3.5 2 5 2-1.5 2-5m6 0q0 3.5 2 5 2-1.5 2-5m-9-8h4m-4 3h4"/>
    </svg>
  );
}
