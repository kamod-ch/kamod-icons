import type { IconProps } from "../../../shared/types";

export function CrownIcon({
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
      <path d="M19 19H5c-.5 0-.9-.3-1-.8l-2-10c0-.4.1-.8.5-1.1.4-.2.8-.2 1.1 0l4.1 3.3 3.4-5.1c.4-.6 1.3-.6 1.7 0l3.4 5.1 4.1-3.3c.3-.3.8-.3 1.1 0 .4.2.5.6.5 1.1l-2 10c0 .5-.5.8-1 .8z"/>
    </svg>
  );
}
