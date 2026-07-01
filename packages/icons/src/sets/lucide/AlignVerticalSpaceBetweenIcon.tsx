import type { IconProps } from "../../shared/types";

export function AlignVerticalSpaceBetweenIcon({
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
      <rect x="5" y="15" rx="2"/><rect x="7" y="3" rx="2"/><path d="M2 21h20M2 3h20"/>
    </svg>
  );
}
