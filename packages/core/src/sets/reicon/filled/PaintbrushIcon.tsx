import type { IconProps } from "../../../shared/types";

export function PaintbrushIcon({
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
      <path fill="currentColor" strokeWidth="1.333" d="M21.757 2.575c-1.053-1.052-2.888-1.054-3.942 0l-6.86 6.86a6.7 6.7 0 0 1 2.422 1.541 6.6 6.6 0 0 1 1.52 2.403l6.862-6.862a2.793 2.793 0 0 0 0-3.944Zm-9.797 9.813A4.67 4.67 0 0 0 8.635 11h-.008a4.63 4.63 0 0 0-3.307 1.39c-1.27 1.283-1.492 2.578-1.67 3.617-.198 1.158-.329 1.922-1.795 2.724a1 1 0 0 0 .19 1.836c1.411.424 2.914.773 4.408.773 1.918 0 3.823-.573 5.507-2.299a4.72 4.72 0 0 0 0-6.652Z"/>
    </svg>
  );
}
