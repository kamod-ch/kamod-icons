import type { IconProps } from "../../../shared/types";

export function SendIcon({
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
      <path fill="currentColor" d="M18.38 1.44c2.606-.918 5.084 1.605 4.182 4.201l-5.178 14.9c-1.01 2.904-5.076 2.959-6.162.083l-1.924-4.86 4.732-4.734a.75.75 0 1 0-1.06-1.06l-4.74 4.739-4.89-1.818-.016-.006C.5 11.762.578 7.716 3.444 6.705z"/>
    </svg>
  );
}
