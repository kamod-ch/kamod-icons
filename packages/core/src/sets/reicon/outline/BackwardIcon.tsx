import type { IconProps } from "../../../shared/types";

export function BackwardIcon({
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
      <path fill="currentColor" fillRule="evenodd" d="M9.044 5.186c1.556-1.104 3.71.009 3.71 1.917v2.545l6.29-4.462c1.556-1.104 3.71.009 3.71 1.917v9.796c0 1.908-2.154 3.02-3.71 1.917l-6.29-4.463V16.9c0 1.908-2.154 3.02-3.71 1.917L2.312 14.04a2.5 2.5 0 0 1 0-4.078zm2.21 1.917a.85.85 0 0 0-1.342-.694L3.18 11.185a1 1 0 0 0 0 1.631l6.732 4.776a.85.85 0 0 0 1.342-.693zm10 0a.85.85 0 0 0-1.342-.694l-6.732 4.776a1 1 0 0 0 0 1.631l6.732 4.776a.85.85 0 0 0 1.342-.693z" clipRule="evenodd"/>
    </svg>
  );
}
