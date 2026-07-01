import type { IconProps } from "../../../shared/types";

export function SortDescendingShapesIcon({
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
      <path d="M7 5a1 1 0 0 1 1 1v9.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L7 19l-.075-.003-.126-.017-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 0 1 1.414-1.414L6 15.586V6a1 1 0 0 1 1-1m12 8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm-1.136-9.504 3.5 6A1 1 0 0 1 20.5 11h-7a1 1 0 0 1-.864-1.504l3.5-6a1 1 0 0 1 1.728 0"/>
    </svg>
  );
}
