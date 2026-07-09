import type { IconProps } from "../../../shared/types";

export function ProgressBarIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path fill="currentColor" strokeWidth="1.333" d="M19 10.667H5c-2.757 0-5 2.242-5 5s2.243 5 5 5h14c2.757 0 5-2.243 5-5s-2.243-5-5-5Zm-7 6H5a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2ZM12 8c-.55 0-1.064-.268-1.372-.716L8.285 3.879c-.344-.5-.38-1.144-.092-1.679s.85-.868 1.466-.868h4.682c.615 0 1.176.332 1.466.868s.252 1.179-.092 1.679l-2.342 3.404a1.66 1.66 0 0 1-1.372.716Zm.55-1.265Z"/>
    </svg>
  );
}
