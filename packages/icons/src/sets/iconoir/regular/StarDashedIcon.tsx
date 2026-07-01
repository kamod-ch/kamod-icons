import type { IconProps } from "../../../shared/types";

export function StarDashedIcon({
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
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m13.806 5-.99-1.996a.911.911 0 0 0-1.631 0l-.496.998m4.322 3.425.402.809 1.452.211m2.905.423 1.451.21a.902.902 0 0 1 .503 1.542l-1.05 1.017m-2.102 2.035-1.05 1.018.248 1.437m.496 2.875.248 1.437c.127.739-.653 1.302-1.32.953l-1.298-.679M10.428 19.5 12 18.678l1.299.679m-7.628.012-.185 1.072c-.127.739.653 1.302 1.32.953l.847-.443M6.253 16l.225-1.308-.695-.673M3.699 12l-1.423-1.378a.902.902 0 0 1 .503-1.542l1.11-.161M7 8.467l1.587-.231.804-1.618"/>
    </svg>
  );
}
