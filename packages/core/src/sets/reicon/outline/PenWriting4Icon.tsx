import type { IconProps } from "../../../shared/types";

export function PenWriting4Icon({
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
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.114 13.667h-.78a2 2 0 0 0 0 4h15.333a2 2 0 0 1 0 4H17m-8-8s3.112-.112 4.212-1.212l6.5-6.5a2.121 2.121 0 0 0-3-3l-6.5 6.5C9.175 10.492 9 13.667 9 13.667"/>
    </svg>
  );
}
