import type { IconProps } from "../../../shared/types";

export function Send2Icon({
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
      <path d="M4.698 4.034 21 12 4.698 19.966a.5.5 0 0 1-.546-.124.56.56 0 0 1-.12-.568L6.5 12 4.032 4.726a.56.56 0 0 1 .12-.568.5.5 0 0 1 .546-.124M6.5 12H21"/>
    </svg>
  );
}
