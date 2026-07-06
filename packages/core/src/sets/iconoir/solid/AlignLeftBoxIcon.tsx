import type { IconProps } from "../../../shared/types";

export function AlignLeftBoxIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m16.005 3.995-.011.01m4.011-.01-.011.01m.011 3.99-.011.01m.011 3.99-.011.01m.011 3.99-.011.01m.011 3.99-.011.01m-3.989-.01-.011.01"/><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.005 3.995h-8v16h8z"/>
    </svg>
  );
}
