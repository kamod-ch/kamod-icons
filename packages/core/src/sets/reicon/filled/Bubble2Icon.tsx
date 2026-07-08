import type { IconProps } from "../../../shared/types";

export function Bubble2Icon({
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
      <path fill="currentColor" d="M15.59 1.75c-2.97 0-5.38 2.41-5.38 5.38s2.41 5.38 5.38 5.38 5.38-2.41 5.38-5.38-2.41-5.38-5.38-5.38ZM6.36 13.031a3.329 3.329 0 1 0-.002 6.662 3.329 3.329 0 0 0 .001-6.662Zm10.26 3.59c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.81 2.81 2.81 2.81-1.26 2.81-2.81-1.26-2.81-2.81-2.81Z"/>
    </svg>
  );
}
