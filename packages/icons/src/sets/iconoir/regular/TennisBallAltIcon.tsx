import type { IconProps } from "../../../shared/types";

export function TennisBallAltIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.66 7c2.762 4.783 1.123 10.899-3.66 13.66S6.101 21.783 3.34 17 2.217 6.1 7 3.34 17.899 2.217 20.66 7"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21.46 15.242c-4.986-3.302-7.582-7.8-7.538-13.056m-3.844 19.628C9.71 15.844 7.114 11.347 2.54 8.758"/>
    </svg>
  );
}
