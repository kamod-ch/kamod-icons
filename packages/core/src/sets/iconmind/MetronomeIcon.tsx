import type { IconProps } from "../../shared/types";

export function MetronomeIcon({
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
      <path d="M4 20c1-7 4-14 6-17h4c2 3 5 10 6 17M4 20h16M12 7v12m-2-8h4"/>
    </svg>
  );
}
