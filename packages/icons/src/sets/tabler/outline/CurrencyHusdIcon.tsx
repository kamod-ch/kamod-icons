import type { IconProps } from "../../../shared/types";

export function CurrencyHusdIcon({
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
      <path d="M7 20v-5m10-6V4m0 16v-6a2 2 0 0 0-2-2H9a2 2 0 0 1-2-2V4"/>
    </svg>
  );
}
