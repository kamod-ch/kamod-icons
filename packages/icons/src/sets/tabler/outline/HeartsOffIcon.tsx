import type { IconProps } from "../../../shared/types";

export function HeartsOffIcon({
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
      <path d="M14.017 18 12 20l-7.5-7.428a5 5 0 0 1 .49-7.586m3.01-1a5 5 0 0 1 4 2.018 5 5 0 0 1 8.153 5.784"/><path d="M11.814 11.814a2.81 2.81 0 0 0-.007 3.948L15.989 20l2.01-2.021m1.977-1.99.211-.212a2.81 2.81 0 0 0 0-3.948 2.747 2.747 0 0 0-3.91-.007l-.283.178M3 3l18 18"/>
    </svg>
  );
}
