import type { IconProps } from "../../../shared/types";

export function SortDownIcon({
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
      <path fill="currentColor" d="M20 4a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h17a1 1 0 0 1 1 1Zm-7 7a1 1 0 0 1-1 1H2a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1Zm-8 8a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2zm8.293-3.707a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L19 17.586V10a1 1 0 1 0-2 0v7.586l-2.293-2.293a1 1 0 0 0-1.414 0Z"/>
    </svg>
  );
}
