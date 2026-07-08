import type { IconProps } from "../../../shared/types";

export function PillIcon({
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
      <path fill="currentColor" d="M3.99 3.99a6.796 6.796 0 0 0 0 9.612l2.564 2.563.495-.095h.001l.014-.003.074-.018q.103-.024.315-.091c.282-.09.697-.243 1.21-.49 1.024-.493 2.438-1.364 3.939-2.866 1.501-1.501 2.372-2.915 2.866-3.939.247-.512.4-.928.49-1.21a5 5 0 0 0 .109-.389l.003-.014.095-.496-2.563-2.563a6.796 6.796 0 0 0-9.611 0Zm13.429 3.817-.032.103c-.11.343-.288.824-.568 1.404-.56 1.162-1.525 2.718-3.156 4.349s-3.187 2.597-4.349 3.157a11 11 0 0 1-1.507.599l2.591 2.59a6.796 6.796 0 1 0 9.611-9.61z"/>
    </svg>
  );
}
