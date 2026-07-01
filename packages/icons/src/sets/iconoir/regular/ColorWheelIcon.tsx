import type { IconProps } from "../../../shared/types";

export function ColorWheelIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0-14v6m0 8v6M2 12h6m8 0h6M4.929 4.929 9.172 9.17m5.656 5.659 4.243 4.242m-14.142 0 4.243-4.242m5.656-5.658 4.243-4.242"/>
    </svg>
  );
}
