import type { IconProps } from "../../shared/types";

export function SelfReflectIcon({
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
      <path d="M13.69 2.37a4 4 0 1 1-3.38 0M5 13h14m-8.27 8.72a3 3 0 1 1 2.54 0"/>
    </svg>
  );
}
