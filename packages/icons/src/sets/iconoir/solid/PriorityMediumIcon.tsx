import type { IconProps } from "../../../shared/types";

export function PriorityMediumIcon({
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
      <g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M11.045.893a1.35 1.35 0 0 1 1.91 0l10.151 10.152a1.35 1.35 0 0 1 0 1.91l-10.151 10.15a1.35 1.35 0 0 1-1.91 0L.894 12.956a1.35 1.35 0 0 1 0-1.91zM5.25 12a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m8.75-.75a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
