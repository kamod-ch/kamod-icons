import type { IconProps } from "../../../shared/types";

export function PaperPlane2Icon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M21.793 2.205a1.71 1.71 0 0 0-1.74-.42L2.823 7.324a1.7 1.7 0 0 0-1.183 1.45c-.075.682.25 1.322.843 1.667L8.584 14l5.27-5.272a1 1 0 1 1 1.415 1.415l-5.272 5.272 3.559 6.1a1.7 1.7 0 0 0 1.67.842 1.7 1.7 0 0 0 1.449-1.181l5.54-17.23a1.71 1.71 0 0 0-.422-1.74Z"/>
    </svg>
  );
}
