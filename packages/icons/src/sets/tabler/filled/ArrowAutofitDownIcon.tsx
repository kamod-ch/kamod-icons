import type { IconProps } from "../../../shared/types";

export function ArrowAutofitDownIcon({
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
      <path d="M14 3a1 1 0 0 1 1 1v11.001h-.092a3 3 0 0 0-2.03 5.12.515.515 0 0 1-.363.879H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/><path d="M18 3a1 1 0 0 1 1 1v14.584l1.293-1.291a1 1 0 0 1 1.32-.083l.094.083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-.112.097l-.11.071-.114.054-.105.035-.149.03L18 22l-.075-.003-.126-.017-.111-.03-.111-.044-.098-.052-.096-.067-.09-.08-3-3a1 1 0 0 1 1.414-1.414L17 18.586V4a1 1 0 0 1 1-1"/>
    </svg>
  );
}
