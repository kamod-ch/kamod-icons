import type { IconProps } from "../../../shared/types";

export function WashingMachineIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M21 4v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2m-3 1.01.01-.011"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 19a6 6 0 1 0 0-12 6 6 0 0 0 0 12"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a3 3 0 0 1-3-3"/>
    </svg>
  );
}
