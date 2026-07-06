import type { IconProps } from "../../../shared/types";

export function AsteriskSimpleIcon({
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
      <path d="M12 12V3m0 9L3 9.5m9 2.5 9-2.5M12 12l6 8.5M12 12l-6 8.5"/>
    </svg>
  );
}
