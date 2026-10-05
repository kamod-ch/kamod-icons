import type { IconProps } from "../../shared/types";

export function WindUmbrellaIcon({
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
      <path d="M21 8A9 9 0 0 1 3 8m0 0h18m-9 0v10m0 0a2 2 0 0 1-4 0"/>
    </svg>
  );
}
