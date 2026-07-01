import type { IconProps } from "../../../shared/types";

export function SquareRoundedPlus2Icon({
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
      <path d="M12.54 20.996q-.264.005-.54.004c-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9q0 .277-.004.544M16 19h6m-3-3v6"/>
    </svg>
  );
}
