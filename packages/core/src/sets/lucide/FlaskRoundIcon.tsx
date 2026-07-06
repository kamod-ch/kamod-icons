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
      <path d="M10 2v6.292a7 7 0 1 0 4 0V2M5 15h14M8.5 2h7"/>
    </svg>
  );
}
