import type { IconProps } from "../../../shared/types";

export function UserOffIcon({
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
      <path fill="currentColor" d="M2.53 1.47a.75.75 0 0 0-1.06 1.06l11.798 11.798A10 10 0 0 0 12 14.25c-4.266 0-8.177 2.677-8.743 6.644A.75.75 0 0 0 4 21.75h16a.75.75 0 0 0 .5-.19l.97.97a.75.75 0 1 0 1.06-1.06l-2.359-2.36-.002-.001-3.831-3.832-.002-.001zm5.478 2.62a5.25 5.25 0 1 1 7.402 7.402.75.75 0 0 1-1.018-.04L8.047 5.109a.75.75 0 0 1-.04-1.018Z"/>
    </svg>
  );
}
