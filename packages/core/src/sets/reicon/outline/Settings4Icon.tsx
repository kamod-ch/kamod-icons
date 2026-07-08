import type { IconProps } from "../../../shared/types";

export function Settings4Icon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9M2 12h5m10 0h5"/>
    </svg>
  );
}
