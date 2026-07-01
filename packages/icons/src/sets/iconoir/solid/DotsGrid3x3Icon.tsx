import type { IconProps } from "../../../shared/types";

export function DotsGrid3x3Icon({
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
      <path fill="currentColor" fillRule="evenodd" d="M21.75 20.4a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35z" clipRule="evenodd"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M5.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M12 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m6.5-13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m0 6.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
    </svg>
  );
}
