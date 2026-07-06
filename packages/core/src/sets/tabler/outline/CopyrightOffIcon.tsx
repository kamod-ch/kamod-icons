import type { IconProps } from "../../../shared/types";

export function CopyrightOffIcon({
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
      <path d="M14 9.75a3 3 0 0 0-.711-.466m-3.41.596a2.993 2.993 0 0 0-.042 4.197A3.016 3.016 0 0 0 14 14.25"/><path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M3 3l18 18"/>
    </svg>
  );
}
