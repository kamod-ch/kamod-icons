import type { IconProps } from "../../../shared/types";

export function LockHeartIcon({
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
      <path d="M11.5 21H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h10c.38 0 .734.106 1.037.29M8 11V7a4 4 0 1 1 8 0v4"/><path d="m18 22 3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071z"/>
    </svg>
  );
}
