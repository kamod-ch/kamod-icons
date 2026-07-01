import type { IconProps } from "../../../shared/types";

export function GaugeOffIcon({
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
      <path d="M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 1 0 12.73 12.726"/><path d="M11.283 11.303a1 1 0 0 0 1.419 1.41M14 10l2-2m-9 4c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7.001 12 7M3 3l18 18"/>
    </svg>
  );
}
