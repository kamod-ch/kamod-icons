import type { IconProps } from "../../shared/types";

export function AlignVerticalSpaceAroundIcon({
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
      <rect x="7" y="9" rx="2"/><path d="M22 20H2M22 4H2"/>
    </svg>
  );
}
