import type { IconProps } from "../../../shared/types";

export function PageEditIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11M8 10h8M8 6h4m-4 8h3m6.954 2.94 1-1a1.12 1.12 0 0 1 1.586 0v0a1.12 1.12 0 0 1 0 1.585l-1 1m-1.586-1.586-2.991 2.991a1 1 0 0 0-.28.553l-.244 1.557 1.557-.243a1 1 0 0 0 .553-.28l2.99-2.992m-1.585-1.586 1.586 1.586"/><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 2v3.4a.6.6 0 0 0 .6.6H20"/>
    </svg>
  );
}
