import type { IconProps } from "../../../shared/types";

export function UmbrellaClosed2Icon({
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
      <path d="M6.697 12.071 18.01 5l-7.07 11.314zm2.046 2.404-2.121 2.121c-1.886 1.886.943 4.715 2.828 2.829"/>
    </svg>
  );
}
