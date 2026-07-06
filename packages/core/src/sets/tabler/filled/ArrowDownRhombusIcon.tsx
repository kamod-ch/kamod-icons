import type { IconProps } from "../../../shared/types";

export function ArrowDownRhombusIcon({
  size = 24,
  title,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="m12.707 2.293 2.5 2.5a1 1 0 0 1 0 1.414L13 8.414v10.17l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L12 22l-.075-.003-.126-.017-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 0 1 1.414-1.414L11 18.586V8.415L8.793 6.207a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 0"/>
    </svg>
  );
}
