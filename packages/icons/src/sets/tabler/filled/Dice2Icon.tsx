import type { IconProps } from "../../../shared/types";

export function Dice2Icon({
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
      <path d="M18.333 2c1.96 0 3.56 1.537 3.662 3.472l.005.195v12.666c0 1.96-1.537 3.56-3.472 3.662l-.195.005H5.667a3.667 3.667 0 0 1-3.662-3.472L2 18.333V5.667c0-1.96 1.537-3.56 3.472-3.662L5.667 2zM14.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5-5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
    </svg>
  );
}
