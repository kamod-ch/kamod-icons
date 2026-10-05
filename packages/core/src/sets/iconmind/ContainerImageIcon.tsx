import type { IconProps } from "../../shared/types";

export function ContainerImageIcon({
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
      <path d="M3 4.5A2.5 2.5 0 0 1 5.5 2h13A2.5 2.5 0 0 1 21 4.5 2.5 2.5 0 0 1 18.5 7h-13A2.5 2.5 0 0 1 3 4.5m2 8A2.5 2.5 0 0 1 7.5 10h9a2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 12.5M7 20a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2"/>
    </svg>
  );
}
