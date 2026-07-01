import type { IconProps } from "../../shared/types";

export function ListFilterPlusIcon({
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
      <path d="M12 5H2m4 7h12m-9 7h6m1-14h6m-3 3V2"/>
    </svg>
  );
}
