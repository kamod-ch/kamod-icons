import type { IconProps } from "../../shared/types";

export function CirclePoundSterlingIcon({
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
      <circle cx="12" cy="12" r="10"/><path d="M10 16V9.5a1 1 0 0 1 5 0M8 12h4m-4 4h7"/>
    </svg>
  );
}
