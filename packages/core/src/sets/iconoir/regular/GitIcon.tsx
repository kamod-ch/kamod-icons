import type { IconProps } from "../../../shared/types";

export function GitIcon({
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
      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" clipPath="url(#a)"><path d="M12 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m4.25-3.75a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M12 10v5M8.25 4.75 10.5 7m2.75 2.75 1.5 1.5"/><path d="M11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848z"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h24v24H0z"/></clipPath></defs>
    </svg>
  );
}
