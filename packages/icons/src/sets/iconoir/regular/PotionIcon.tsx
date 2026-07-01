import type { IconProps } from "../../../shared/types";

export function PotionIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 4h4v2.568c0 .258.17.487.412.579C22.938 10.37 20.908 22 15 22H9c-5.907 0-7.937-11.63.588-14.853a.63.63 0 0 0 .412-.58z"/><path stroke="currentColor" d="M6 10h12"/><path stroke="currentColor" strokeLinecap="round" d="M9 2h6"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.667 13 10 16h4l-1.667 3"/>
    </svg>
  );
}
