import type { IconProps } from "../../shared/types";

export function ShelvingUnitIcon({
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
      <path d="M12 12V9a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3m8 8v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m8 2V2M4 12h16M4 20h16M4 2v20M4 4h16"/>
    </svg>
  );
}
