import type { IconProps } from "../../../shared/types";

export function SquareRoundedMinus2Icon({
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
      <path d="M12.5 21c-.18.002-.314 0-.5 0-7.2 0-9-1.8-9-9s1.8-9 9-9 9 1.8 9 9c0 1.136-.046 2.138-.152 3.02M16 19h6"/>
    </svg>
  );
}
