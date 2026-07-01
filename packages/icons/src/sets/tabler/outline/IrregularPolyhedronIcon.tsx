import type { IconProps } from "../../../shared/types";

export function IrregularPolyhedronIcon({
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
      <path d="m6 12-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503a1 1 0 0 0 .592-1.204L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L4.84 4.665a1 1 0 0 0-.592 1.204z"/><path d="m4.5 5.5 6.622 2.33a2.35 2.35 0 0 0 1.756 0L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0L18 12m-6 10V8"/>
    </svg>
  );
}
