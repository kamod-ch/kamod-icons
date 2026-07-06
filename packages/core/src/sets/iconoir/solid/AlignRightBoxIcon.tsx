import type { IconProps } from "../../../shared/types";

export function AlignRightBoxIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m8.005 20.005.011-.01m-4.011.01.011-.01m-.011-3.99.011-.01m-.011-3.99.011-.01m-.011-3.99.011-.01m-.011-3.99.011-.01m3.989.01.011-.01"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.005 20.005h8v-16h-8z"/>
    </svg>
  );
}
