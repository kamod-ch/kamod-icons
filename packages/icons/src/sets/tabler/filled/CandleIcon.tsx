import type { IconProps } from "../../../shared/types";

export function CandleIcon({
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
      <path d="M14 9a2 2 0 0 1 2 2v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V11a2 2 0 0 1 2-2zm-2.746-7.666a1 1 0 0 1 1.491 0l1.452 1.623a3 3 0 0 1-4.196 4.28c-1.195-1.07-1.339-2.889-.297-4.166z"/>
    </svg>
  );
}
