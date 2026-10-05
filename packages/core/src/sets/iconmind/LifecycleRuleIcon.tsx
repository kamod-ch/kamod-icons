import type { IconProps } from "../../shared/types";

export function LifecycleRuleIcon({
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
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m0 7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m0 7a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2M19 5v10m-2.5-2.5L19 15l2.5-2.5"/>
    </svg>
  );
}
