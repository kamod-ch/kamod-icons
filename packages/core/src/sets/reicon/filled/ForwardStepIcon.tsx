import type { IconProps } from "../../../shared/types";

export function ForwardStepIcon({
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
      <path fill="currentColor" d="M18.254 5.5a.75.75 0 0 0-1.5 0v4.825a2 2 0 0 0-.207-.165L9.815 5.384C8.425 4.398 6.5 5.392 6.5 7.097v9.796c0 1.705 1.924 2.7 3.315 1.713l6.732-4.776a2 2 0 0 0 .207-.165V18.5a.75.75 0 0 0 1.5 0z"/>
    </svg>
  );
}
