import type { IconProps } from "../../shared/types";

export function FlaskRoundIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2v7.31m4-.01V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0m-4.42 7.2h12.85"/>
    </svg>
  );
}
