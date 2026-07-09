import type { IconProps } from "../../../shared/types";

export function MapIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="m7.333 2.865-4.172.927a2.32 2.32 0 0 0-1.828 2.277v11.268c0 .712.319 1.375.874 1.82s1.27.614 1.966.458l3.162-.702V2.865Zm7.334 2.04-5.334-1.94v16.13l5.334 1.94zm7.126-.062a2.32 2.32 0 0 0-1.966-.458l-3.162.702v16.048l4.172-.927a2.32 2.32 0 0 0 1.828-2.277V6.663a2.32 2.32 0 0 0-.873-1.82Z"/>
    </svg>
  );
}
